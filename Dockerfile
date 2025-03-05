FROM denoland/deno
WORKDIR /usr/src/app

COPY ./package.json .

RUN deno install

COPY . .

RUN deno run build

EXPOSE 5000

ENV HOST=0.0.0.0

CMD [ "deno", "run", "preview" ]
