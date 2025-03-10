# Use official Node.js image as base
FROM node:18-alpine

# Set working directory in the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm", "run", "dev"]