# Use an official Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock first for efficient caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose ports used by json-server and the app
EXPOSE 8000 3000

# Define environment variables if needed (e.g., NODE_ENV)
ENV NODE_ENV production

# Start both servers
CMD ["sh", "-c", "yarn server & yarn start"]
