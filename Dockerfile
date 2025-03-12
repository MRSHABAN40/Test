FROM node:lts-buster
RUN git clone https://github.com/misbha37/SHABAN-MD/root/SHABAN-MD
WORKDIR /root/SHABAN-MD
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
