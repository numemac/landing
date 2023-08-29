FROM node:16
ENV BUILD_PATH='./build/about'
ENV PORT=3006
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --global serve
COPY . /app
RUN npm run fetch
RUN npm run build
EXPOSE 3006
CMD ["npm", "run", "serve"]
