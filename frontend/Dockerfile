FROM node:16.14.0-buster-slim
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
RUN npm i react-scripts@3.4.1 -g --silent
COPY . ./
# CMD ["npm", "start"]
RUN npm run build
RUN npm i -g serve --silent
CMD ["serve", "-s", "build"]