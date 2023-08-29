FROM node:16
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --global serve
COPY . /app
EXPOSE 3006
CMD ["npm", "run", "serve"]
