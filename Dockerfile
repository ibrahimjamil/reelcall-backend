FROM node:16

ARG app_port=80

ENV NODE_ENV production
ENV APP_PORT $app_port

WORKDIR /usr/src/reelcall-graph

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci --only=production
RUN npx prisma generate
COPY . .

EXPOSE $app_port
CMD ["npm", "run", "prod"]
