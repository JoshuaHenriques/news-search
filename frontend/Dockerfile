# FROM node:16.14.0-buster-slim
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm i --silent
# COPY . ./
# RUN npm i -g serve --silent
# CMD ["serve", "-s", "build"]

FROM node:16.14.0-buster-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --slient
COPY . .
# RUN npm run build --production
RUN npm install -g serve --silent
#CMD ["npm", "start"]
CMD serve -s build