import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

const SUPPORTED = ["nl", "en", "it"];

const env = import.meta.env;
const SMTP_HOST = env.SMTP_HOST;
const SMTP_PORT = Number(env.SMTP_PORT || "587");
const SMTP_USER = env.SMTP_USER;
const SMTP_PASS = env.SMTP_PASS;
const SMTP_FROM = env.SMTP_FROM || SMTP_USER;
const SMTP_TO = env.SMTP_TO || "info@idexsupply.nl";

const isValid = (value: FormDataEntryValue | null) =>
  typeof value === "string" && value.trim().length > 0;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const intent = String(data.get("intent") || "intake");
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const langRaw = String(data.get("lang") || "en");
    const lang = SUPPORTED.includes(langRaw) ? langRaw : "en";

    if (!isValid(name) || !isValid(email) || !isValid(message)) {
      return new Response(null, {
        status: 303,
        headers: { Location: `/${lang}/contact/?error=1` },
      });
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
      return new Response(null, {
        status: 303,
        headers: { Location: `/${lang}/contact/?error=1` },
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const subject = `IDEX Supply - ${intent === "scan" ? "Supply Scan" : "Intake"}`;
    const text = [
      `Type: ${intent}`,
      `Naam: ${String(name).trim()}`,
      `E-mail: ${String(email).trim()}`,
      "",
      String(message).trim(),
    ].join("\n");

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      replyTo: String(email).trim(),
      subject,
      text,
    });

    return new Response(null, {
      status: 303,
      headers: { Location: `/${lang}/contact/?sent=1` },
    });
  } catch {
    return new Response(null, {
      status: 303,
      headers: { Location: `/en/contact/?error=1` },
    });
  }
};
