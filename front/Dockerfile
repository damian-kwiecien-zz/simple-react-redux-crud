FROM node:latest
WORKDIR /front

COPY package.json ./
COPY tsconfig.json ./
COPY tslint.json ./
COPY webpack.config.js ./

RUN npm i --silent
CMD npm start