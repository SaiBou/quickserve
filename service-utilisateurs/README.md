# 🍽️ QuickServe

QuickServe est une plateforme de gestion intelligente de services (utilisateurs et produits), construite en architecture microservices avec un front-end React.

---

## 📦 Structure du projet

```
QuickServe/
├── quickserve-frontend/       # Front-end (React + Vite + TailwindCSS)
├── service-utilisateurs/      # Microservice utilisateurs (Node.js + Prisma)
├── service-produits/          # Microservice produits (Node.js + Prisma)
├── docker-compose.yml         # Orchestration des services
└── README.md
```

---

## ⚙️ Prérequis

- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)
- (facultatif) Node.js si tu veux lancer les services localement

---

## 🚀 Lancer le projet

1. **Cloner le dépôt**

```bash
git clone https://github.com/SaiBou/quickserve.git
cd quickserve
```

2. **Créer les fichiers `.env` à partir des exemples**

```bash
cp service-utilisateurs/.env.example service-utilisateurs/.env
cp service-produits/.env.example service-produits/.env
cp quickserve-frontend/.env.example quickserve-frontend/.env
```

3. **Lancer tous les services avec Docker**

```bash
docker compose up --build -d
```

4. **Initialiser la base de données (à faire UNE fois)**

```bash
docker exec -it service-utilisateurs npx prisma migrate dev --name init
```

> 💡 Tu peux aussi le faire pour `service-produits` si ce service a une base liée à Prisma.

---

## 🧪 Accès et test

- Frontend : [http://localhost:5173](http://localhost:5173)
- API utilisateurs : [http://localhost:3000/api/utilisateurs](http://localhost:3000/api/utilisateurs)
- API produits : [http://localhost:3001/api/produits](http://localhost:3001/api/produits)

---

## 📂 Fichiers `.env`

> **NE PAS MODIFIER directement les `.env.example`**  
> Pour configurer votre environnement, dupliquez les `.env.example` en `.env` dans chaque dossier.

---

