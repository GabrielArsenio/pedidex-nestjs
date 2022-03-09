# estágio de compilação
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# estágio de produção
FROM node:14-alpine as production-stage

ENV NODE_ENV=production

EXPOSE 3000

RUN mkdir /application

COPY --from=build-stage /app/dist /application
COPY ./package.json /application

WORKDIR /application
RUN npm install -g pm2
RUN npm i --only=prod

CMD ["pm2-runtime", "main.js", "-i", "5"]
