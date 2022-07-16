FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN apk add bash && yarn add global pm2
RUN yarn install

COPY . .

RUN yarn run build && yarn run cp-env && yarn run cp-config && yarn run cp-assets

COPY ./tsconfig.json /usr/src/app
COPY ./tsconfig-paths-bootstrap.js /usr/src/app
COPY .env ./

EXPOSE 80
EXPOSE 3000

ENTRYPOINT ["sh", "-c"]

CMD ["yarn pm2-runtime -r ./tsconfig-paths-bootstrap.js dist/src/main.js"]
