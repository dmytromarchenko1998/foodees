FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN sudo npm install

EXPOSE 3001

CMD [ "npm", "start" ]
