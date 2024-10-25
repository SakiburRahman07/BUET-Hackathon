FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5177

CMD ["npm", "run", "dev"]



# // in package.json we need to add script "dev" : "vite --host 0.0.0.0"