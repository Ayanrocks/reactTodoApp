FROM node:10.16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

# RUN npm audit fix

RUN cd client && yarn build && cd ..

# RUN npm i -g nodemon

CMD ["node", "app.js"]