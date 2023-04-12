# Utilisez une image Node.js officielle comme base
FROM node:18.15.0-alpine

# Créez un répertoire pour l'application et définissez-le comme répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et package-lock.json (si disponible) dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances du projet
RUN npm ci

# Copiez les autres fichiers du projet dans le répertoire de travail
COPY . .

# Construisez le projet
RUN npm run build

# Utilisez une seconde image pour le déploiement
FROM nginx:stable-alpine

# Copiez les fichiers de build dans le répertoire de Nginx pour être servis
COPY --from=0 /app/dist /usr/share/nginx/html

# Exposez le port pour le serveur Nginx
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]