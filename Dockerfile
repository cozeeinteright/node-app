# syntax=docker/dockerfile:1
FROM alpine:node:20.15.1-alpine3.20
WORKDIR /app
COPY . /app/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "devstart"]

