FROM node:alpine 


# Setting up the work directory
WORKDIR /app
COPY . .
# Installing dependencies

RUN npm install
RUN npm run build

EXPOSE 3000

# Copying all the files in our project


# Starting our application
CMD ["npm","start"]