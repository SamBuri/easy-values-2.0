# Use an official Node.js runtime as the base image
# FROM node:18 as build-stage
FROM node:20-slim as build-stage

# Set the working directory
WORKDIR /app

# Copy package.json, package-lock.json and libs directory containing local tarballs
COPY package*.json ./
COPY libs/ ./libs/

# Install dependencies
RUN rm -f package-lock.json && npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine as production-stage

# Copy the built app from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# #copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]