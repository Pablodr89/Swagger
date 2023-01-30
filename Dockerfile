FROM node:19-alpine3.15
RUN mkdir -p /usr/src/ApiRestFul/src
WORKDIR /usr/src/index
# copying all the files from your file system to container file system
COPY package*.json ./
# install all dependencies
RUN npm i
# copy other files as well
COPY ./src/ ./src/
#expose the port
EXPOSE 3000
# run the app
# command to run when intantiate an image
CMD ["npm","start"]