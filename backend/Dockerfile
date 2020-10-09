FROM node:12-alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm set strict-ssl false
RUN npm install --only=prod
COPY . /app

EXPOSE 808
CMD ["npm", "start"]
