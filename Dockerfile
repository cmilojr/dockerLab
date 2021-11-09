FROM node:14-stretch-slim

RUN apt-get update
RUN mkdir /app
WORKDIR /app
COPY package*.json /app/
RUN npm i
COPY . /app
ENV NODE_ENV QA
ENV PORT 8080
EXPOSE 8080
CMD ["node", "index.js"]