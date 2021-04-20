FROM node:15 AS build

COPY ./yarn.lock ./package.json /site/
WORKDIR /site
RUN yarn install --frozen-lockfile

COPY ./src /site/src/
COPY ./*js /*json /site/
RUN yarn run clean && yarn run build


FROM nginx:1-alpine

COPY --from=build /site/public /usr/share/nginx/html/
EXPOSE 80