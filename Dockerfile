FROM node:18-alpine AS builder

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["npm", "run", "start"]