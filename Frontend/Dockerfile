FROM Node:18

WORKDIR /app

COPY package*.json /app/

RUN npm install --production 

RUN npx run build 

EXPOSE 5000

CMD [ "npx", "serve", "-s","dist"]
