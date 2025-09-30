FROM nginx:stable-alpine

# Metadatos
LABEL maintainer="tu@correo.com"
LABEL version="1.0"
LABEL name="yo"
# Copiar los archivos HTML y CSS al directorio por defecto de Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/

# Exponer el puerto 80 (opcional pero buena práctica documental)
EXPOSE 80

# Comando por defecto para ejecutar Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
