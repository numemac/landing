# Dockerfile for nextjs app on port 5002 on node 16.20
FROM node:20.10.0
ENV PORT=5002
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --global serve
COPY . /app
RUN npm run build
EXPOSE 5002
CMD ["npm", "run", "serve"]