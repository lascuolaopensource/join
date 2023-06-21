##### INSTALLING DEV DEPS
FROM node:20-alpine3.18 AS dev_deps

WORKDIR /app
COPY prisma ./

COPY package.json  pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm i;

##### INSTALLING PROD DEPS
FROM node:20-alpine3.18 AS prod_deps

WORKDIR /app
COPY prisma ./

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm i -P;




##### BUILDING SVELTEKIT
FROM node:20-alpine3.18 AS builder

ENV DATABASE_URL file:./dev.db

WORKDIR /app
COPY --from=dev_deps /app/node_modules ./node_modules
COPY . .

RUN npm install -g pnpm
RUN pnpm build



##### INIT PRISMA
FROM --platform=linux/amd64 node:20-alpine3.18 AS prisma
WORKDIR /app

ENV DATABASE_URL file:./dev.db

COPY ./prisma ./prisma

RUN npm init -y
RUN npm install prisma --save-dev


##### RUNNER

FROM --platform=linux/amd64 node:20-alpine3.18 AS runner
WORKDIR /app

ENV DATABASE_URL file:./dev.db
ENV NODE_ENV production
ENV HTTPS false

COPY --from=prod_deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./
COPY --from=builder /app/build ./build
COPY --from=prisma /app ./prisma
COPY dockerEntrypoint.sh /app/dockerEntrypoint.sh

EXPOSE 3000
ENV PORT 3000

RUN chmod +x /app/dockerEntrypoint.sh

ENTRYPOINT ["/app/dockerEntrypoint.sh"]
CMD []