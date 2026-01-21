# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Deploy (Hetzner + PM2)

Korte handleiding om de live versie te updaten via SSH.

### Voorbereiden (lokaal)

```sh
git status
git add -A
git commit -m "Your message"
git push
```

### Deploy (server)

```sh
ssh USER@SERVER_IP
cd /pad/naar/project
git pull
npm ci
npm run build
pm2 restart ecosystem.config.js
pm2 status
pm2 logs --lines 100
```

### Zonder ecosystem file

Als je geen `ecosystem.config.js` gebruikt, restart dan op app-naam:

```sh
pm2 restart jouw-app-naam
```


### push en deploy



cd "C:\Eigen bedrijf\Websites\idex supply\idex-supply-site"
git add src/pages/[lang]/contact.astro
git commit -m "Align contact cards and remove kicker"
git push origin main


ssh -i "C:\Users\ronal\.ssh\ssh-key-2026-01-10.key" root@46.224.208.213

cd /var/www/idex-supply-site
git fetch origin
git reset --hard origin/main
npm run build
sudo systemctl restart idex-supply-site
