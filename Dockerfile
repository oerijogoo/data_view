# Use the official Node.js 14 image as the base
FROM node:16.13.0

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which your application listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]