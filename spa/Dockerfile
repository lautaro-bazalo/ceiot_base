FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN ["tsc --project ts --outDir static/js --pretty true"]


FROM nginx as final

COPY /static /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;"]

