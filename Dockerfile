# Use Node.js 22 to meet json-server requirements
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json first
COPY package.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose ports used by json-server and the app
EXPOSE 3000
EXPOSE ${JSON_SERVER_PORT:-8000}

# Make start script executable
RUN chmod +x start.sh

# Start both servers
CMD ["./start.sh"]
