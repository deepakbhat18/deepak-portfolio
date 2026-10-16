# Stage 1: Build React Application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package manifests
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy application source code
COPY . .

# Build production bundle
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine

# Copy custom Nginx configuration supporting React Router SPA paths
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy production build artifacts from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
