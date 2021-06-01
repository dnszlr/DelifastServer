FROM node
WORKDIR /usr/src/delifastServer
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]