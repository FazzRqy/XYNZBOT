# Menggunakan image Ubuntu Focal sebagai base image
FROM ubuntu:focal

ENV DEBIAN_FRONTEND=noninteractive

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Expose the port that the server will run on
EXPOSE 7860

# Update the package list dan upgrade existing packages
RUN apt update && apt upgrade -y

# Install required packages
RUN apt install -y curl

# Add NodeSource APT repository for Node 18.x
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -

# CODE SERVER
RUN curl -fsSL https://code-server.dev/install.sh | sh

# Install Node.js and npm
RUN apt install -y nodejs

# Install Neofetch
RUN apt install -y neofetch

# Install FFmpeg dan dependencies lainnya
RUN apt install -y ffmpeg gnupg ca-certificates build-essential software-properties-common chromium-browser

# Install additional dependencies for Puppeteer
RUN apt --yes install libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libgbm1 libasound2 libpangocairo-1.0-0 libxss1 libgtk-3-0

# Install ImageMagick
RUN apt install -y imagemagick

# Create a non-root user named Nex and switch to it
RUN useradd -m -u 1000 Nex
USER Nex

# Set environment variables for the user
ENV HOME=/home/Nex \
    PATH=/home/Nex/.local/bin:$PATH

# Set the working directory
WORKDIR $HOME/app

# Copy package.json and package-lock.json files and install dependencies
COPY --chown=Nex package*.json . 
RUN npm install

# Copy the rest of the application code
COPY --chown=Nex . .

# Start the application
CMD ["code-server", ".", "--bind-addr", "0.0.0.0:7860", "--auth", "none"]
