FROM php:8.1-apache

# Actualiza repos y paquetes esenciales para compilación + sqlite dev
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libzip-dev \
    zip \
    unzip \
    libonig-dev \
    libxml2-dev \
    && docker-php-ext-install pdo pdo_sqlite

# Copia el proyecto
COPY . /var/www/html/

# Permisos
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

EXPOSE 80
