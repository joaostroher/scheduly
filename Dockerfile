FROM node:12-alpine

#Copy package.json, yarn.lock
WORKDIR /app
COPY web/package.json web/yarn.lock ./web/
COPY server/package.json server/yarn.lock ./server/

#Yarn
WORKDIR /app/web
RUN yarn --production
WORKDIR /app/server
RUN yarn

#Build web
WORKDIR /app/server
COPY server/ ./
WORKDIR /app/web
COPY web/ ./
RUN yarn build && rm -Rf node_modules && rm -Rf src
RUN mv /app/web/build/* /app/server/public
RUN rm -Rf /app/web

WORKDIR /app/server

EXPOSE 3300

CMD ["yarn", "dev"]

