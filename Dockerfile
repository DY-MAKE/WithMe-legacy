FROM node:17

WORKDIR /app
COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "prod"]