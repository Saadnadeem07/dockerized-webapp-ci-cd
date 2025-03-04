# Use a smaller Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
