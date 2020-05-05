FROM node:14.1-alpine

MAINTAINER Diego Costa Figueiredo <emaildodiegocosta@gmail.com>

WORKDIR /usr/src/app

COPY package*.json ./	

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]