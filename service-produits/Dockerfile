FROM node:18

# ➕ Installer netcat pour wait-for.sh
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for.sh .
RUN chmod +x wait-for.sh

EXPOSE 3000

CMD ["./wait-for.sh"]
