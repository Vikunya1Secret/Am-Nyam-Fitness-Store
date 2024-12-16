FROM node:20.18.0 AS development

ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/server

# Установить зависимости
COPY package.json .
COPY package-lock.json .
RUN npm install

# Копировать исходный код
COPY . .

# Установить глобально Nest CLI для разработки
RUN npm install -g @nestjs/cli

# Открыть порт для разработки
EXPOSE 4000

# Команда запуска (можно поменять на `npm start` для production)
CMD ["npm", "run", "start:dev"]