FROM node as builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV REACT_APP_FRONTEND_BACKEND_URL /backend 
RUN env 
RUN npm run build

FROM nginx:1.15.2-alpine as server
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /usr/src/app/build/ /var/www
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]



