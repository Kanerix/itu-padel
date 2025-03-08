FROM denoland/deno AS build
WORKDIR /usr/src/app

COPY ./package.json .
COPY ./deno.lock .

RUN deno install

COPY . .

RUN deno task build

CMD [ "deno", "run", "build" ]


FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
