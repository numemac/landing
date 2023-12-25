# Dockerfile for nextjs app on port 5000 on node 16.20
FROM node:20.10.0
ENV PORT=5000
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --global serve
COPY . /app
RUN npm run build
EXPOSE 5000
CMD ["npm", "run", "serve"]