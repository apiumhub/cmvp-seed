FROM node:0.12.5
MAINTAINER jose.barroso@apiumtech.com

RUN npm install -g grunt-cli
WORKDIR /app

# Cache npm install
ADD package.json /app/
RUN npm install

EXPOSE 9000
CMD grunt deploy:dev

# Add code
ADD . /app