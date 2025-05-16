FROM node:18

RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma
COPY . .

RUN chmod +x wait-for.sh

# Ajoute Prisma CLI localement pour pouvoir l’utiliser
RUN npm install prisma --save-dev

# ✅ Exécute les migrations automatiquement au démarrage
CMD ["sh", "-c", "./wait-for.sh && npx prisma migrate deploy && node dist/main.js"]


