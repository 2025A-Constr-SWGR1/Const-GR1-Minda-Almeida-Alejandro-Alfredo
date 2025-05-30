FROM node:22.14
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app
# Copia los archivos del proyecto al contenedor
COPY package.json package-lock.json ./
# Instala las dependencias del proyecto
RUN npm install

COPY dist/ ./dist
# Expone el puerto en el que corre tu app (ajústalo según tu app)
EXPOSE 3000
# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]

