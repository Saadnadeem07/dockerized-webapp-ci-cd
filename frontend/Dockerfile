# Use Node Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Expose port
EXPOSE 3000

# Start the frontend
CMD ["npm", "run", "start"]
