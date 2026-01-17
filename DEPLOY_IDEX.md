# Deploy: IDEX Supply (GitHub -> Server)

## Workflow (kort)
1) Lokaal wijzigen
2) git add . -> git commit -m "update" -> git push
3) Op de server: git pull + build + restart

## Handmatig updaten (server)
```
cd /var/www/idex-supply-site
git pull
npm ci
npm run build
systemctl restart idex-supply-site
```

## Deploy-script (1x aanmaken op de server)
```
cat > /usr/local/bin/deploy-idex <<'EOF'
#!/usr/bin/env bash
set -e
cd /var/www/idex-supply-site
git pull
npm ci
npm run build
systemctl restart idex-supply-site
EOF
chmod +x /usr/local/bin/deploy-idex
```

## Daarna deployen met 1 commando
```
deploy-idex
```

## Belangrijk
- .env blijft alleen op de server (nooit pushen naar GitHub)
- Wijzigingen worden pas live na git push + deploy
