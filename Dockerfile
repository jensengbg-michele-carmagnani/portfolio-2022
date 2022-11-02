# Install dependencies only when needed
FROM node:16-alpine 

WORKDIR /app

COPY package.json yarn.lock ./

WORKDIR /app

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]