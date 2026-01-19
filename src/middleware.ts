import type { MiddlewareHandler } from "astro";

const SUPPORTED = ["nl", "en", "it"];
const COOKIE_NAME = "idex_lang";
const COUNTRY_HEADERS = [
  "cf-ipcountry",
  "x-vercel-ip-country",
  "x-country-code",
  "x-geo-country",
  "x-client-country",
  "x-appengine-country",
];

const langFromCountry = (headers: Headers) => {
  for (const key of COUNTRY_HEADERS) {
    const raw = headers.get(key);
    if (!raw) continue;
    const code = raw.split(",")[0]?.trim().toUpperCase();
    if (code === "NL") return "nl";
    if (code === "IT") return "it";
  }
  return null;
};

const pickLang = (headerValue: string | null) => {
  if (!headerValue) return "en";
  const prefs = headerValue
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);
  for (const pref of prefs) {
    const match = SUPPORTED.find((code) => pref.startsWith(code));
    if (match) return match;
  }
  return "en";
};

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { pathname, search } = context.url;
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg && SUPPORTED.includes(seg)) {
    const res = await next();
    res.headers.append("Set-Cookie", `${COOKIE_NAME}=${seg}; Path=/; Max-Age=31536000; SameSite=Lax`);
    return res;
  }
  if (pathname === "/") {
    const cookie = context.request.headers.get("cookie") || "";
    const match = cookie.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
    const pref = match?.[1];
    const langFromCookie = pref && SUPPORTED.includes(pref) ? pref : null;
    const langFromGeo = langFromCountry(context.request.headers);
    const lang =
      langFromCookie ||
      langFromGeo ||
      pickLang(context.request.headers.get("accept-language"));
    return context.redirect(`/${lang}/${search}`);
  }
  return next();
};
