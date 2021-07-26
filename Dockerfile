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

WORKDIR /usr/share/nginx/html
COPY --from=buildstep /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# docker build .  -t si3mshady/blogsite-fe:1 