#!/bin/sh

echo "⏳ Attente de PostgreSQL à ${DB_HOST:-NON_DÉFINI}:${DB_PORT:-NON_DÉFINI}..."

# Vérifie que les variables existent
if [ -z "$DB_HOST" ] || [ -z "$DB_PORT" ]; then
  echo "❌ Variables d'environnement manquantes : DB_HOST=$DB_HOST DB_PORT=$DB_PORT"
  exit 1
fi

# Attente active tant que la DB ne répond pas
while ! nc -z "$DB_HOST" "$DB_PORT"; do
  sleep 1
done

echo "✅ PostgreSQL est prêt ! Démarrage de l'application..."

exec npm start
