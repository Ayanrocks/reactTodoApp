FROM node:10.16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm audit fix

RUN cd client && yarn build

RUN npm i -g nodemon

CMD ["nodemon", "app.js"]