FROM node:14-alpine

WORKDIR /bootcamp-app

COPY package*.json .
RUN npm install
COPY . .
# RUN npm run initdb
EXPOSE 3000

# CMD npm run initdb && npm run start
CMD npm run start
