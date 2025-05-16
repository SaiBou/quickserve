#!/bin/sh

# attend que la base soit prête
until nc -z $DB_HOST $DB_PORT; do
  echo "⏳ Attente de PostgreSQL à $DB_HOST:$DB_PORT..."
  sleep 1
done

echo "✅ Connexion PostgreSQL réussie"

echo "📦 Génération du client Prisma"
npx prisma generate

echo "🔄 Déploiement des migrations Prisma"
npx prisma migrate deploy

# puis on lance l'app
echo "🚀 Démarrage de l'application Node.js"
node src/app.js
