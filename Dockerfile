FROM node:14
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install -g ionic
RUN npm install
EXPOSE 8100
CMD [ "ionic", "serve", "--external"]