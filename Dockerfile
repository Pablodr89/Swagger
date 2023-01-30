FROM node:19-alpine3.15

WORKDIR /usr/src/app
# copying all the files from your file system to container file system
COPY package*.json ./
# install all dependencies
RUN npm i
# copy other files as well
COPY ./src/ ./src/
#expose the port
EXPOSE 8000
# run the app
# command to run when intantiate an image
CMD ["npm","start"]