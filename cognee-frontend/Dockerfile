# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install any needed packages specified in package.json
RUN npm ci
RUN npm rebuild lightningcss

# Copy the rest of the application code to the working directory
COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY tsconfig.json .

# Public environment variables are embedded by Next.js during the build.
# docker-compose.coolify.yml passes these from .env/Coolify build arguments.
ARG NEXT_PUBLIC_LOCAL_API_URL=http://localhost:8000
ARG NEXT_PUBLIC_BACKEND_API_URL=http://localhost:8000
ARG NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT=false
ENV NEXT_PUBLIC_LOCAL_API_URL=${NEXT_PUBLIC_LOCAL_API_URL}
ENV NEXT_PUBLIC_BACKEND_API_URL=${NEXT_PUBLIC_BACKEND_API_URL}
ENV NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT=${NEXT_PUBLIC_IS_CLOUD_ENVIRONMENT}

# Build and run the UI as a production Next.js server.
RUN npm run build
CMD ["npm", "run", "start"]
