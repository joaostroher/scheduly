FROM node:12-alpine

#Copy package.json, yarn.lock
WORKDIR /app
COPY web/package.json web/yarn.lock ./web/
COPY server/package.json server/yarn.lock ./server/

#Yarn
WORKDIR /app/web
RUN yarn --production --network-timeout 100000
WORKDIR /app/server
RUN yarn --network-timeout 100000

#Build web
WORKDIR /app/server
COPY server/ ./
RUN chmod +x start.sh
WORKDIR /app/web
COPY web/ ./
RUN yarn build && rm -Rf node_modules && rm -Rf src
RUN mv /app/web/build/* /app/server/public
RUN rm -Rf /app/web

WORKDIR /app/server

EXPOSE 3300

CMD ["./start.sh"]

