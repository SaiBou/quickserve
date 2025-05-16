# 🚀 QuickServe

QuickServe est une plateforme en microservices :

- Frontend : React + TypeScript + TailwindCSS
- Backend : Node.js + Express + Prisma
- Bases de données : PostgreSQL
- Conteneurisation : Docker + Docker Compose

---

## ⚙️ Prérequis

- Node.js ≥ 18
- Docker & Docker Compose

---

## 🚀 Lancer le projet

```bash
git clone https://github.com/SaiBou/quickserve.git
cd quickserve

cp quickserve-frontend/.env.example quickserve-frontend/.env
cp service-utilisateurs/.env.example service-utilisateurs/.env
cp service-produits/.env.example service-produits/.env

docker compose up --build -d

docker exec -it service-utilisateurs npx prisma migrate dev --name init

## Accès

Frontend : http://localhost:5173

Utilisateurs API : http://localhost:3000/api/utilisateurs

Produits API : http://localhost:3001/api/produits
