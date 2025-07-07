# Étape 1 : Utiliser une image Node pour builder le projet
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste du code source
COPY . .

# Build du projet
RUN npm run compile
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers de build vers Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
