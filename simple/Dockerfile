FROM node:fermium-alpine3.16

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1000

CMD ["npm", "start"]

