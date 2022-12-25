FROM node:18
WORKDIR /app
COPY . .
RUN npm i --omit=dev -q && npm i -g pm2 -q
EXPOSE 3500
CMD ["pm2-runtime", "process.json"]

