FROM node:22-slim AS builder

ENV NODE_ENV=build


WORKDIR /app

COPY package.json package.json

RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev \
  && rm -rf /var/lib/apt/lists/*

RUN yarn install  


COPY --chown=node:node . .

RUN yarn build

RUN rm -rf node_modules
ENV NODE_ENV=production
RUN yarn install 

# ---

FROM node:22-slim

RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production


WORKDIR /app

COPY --chown=node:node --from=builder /app .

EXPOSE 3000

USER node

CMD ["npm", "start"]
