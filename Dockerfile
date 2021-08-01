FROM node:latest AS buildstep

WORKDIR /app

RUN mkdir public/ && mkdir src/

COPY package.json .

COPY public/ public/

COPY src/ src/

RUN npm i package.json && npm run build 
#creates a build directory in the current stage /w node img

FROM nginx:latest 
#creates a fresh image layer 

LABEL developer=ElliottLamarArnold

RUN rm /etc/nginx/conf.d/default.conf

RUN mkdir -p /blogsite

COPY --from=buildstep /app/build/ /blogsite 
#blogsite will house all static files and index.html 
#ngix.conf is configured to serve the website from root = /blogsite

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build .  -t si3mshady/blogsite-fe:1 