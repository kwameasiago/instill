FROM node:14

WORKDIR /api

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3031

CMD npm start