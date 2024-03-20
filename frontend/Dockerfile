# Use an official Nginx image as the base
FROM nginx:alpine

# Copy your static files to the Nginx image
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]