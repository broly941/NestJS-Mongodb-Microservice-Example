FROM node:alpine
WORKDIR src/app
ENV DB_URL 10.104.1.145
ENV DB_USERNAME navigatorDb
COPY . . 
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]