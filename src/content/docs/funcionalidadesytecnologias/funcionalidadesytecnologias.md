---
title: Funcionalidades y tecnologías
---
### Funcionalidades

- Listado de servicios y productos ofrecidos.
- Información detallada con imagen y descripción.
- Formulario de contacto que envía mensajes por correo electrónico.
- API propia para consumo de datos desde la base de datos.

### Tecnologías utilizadas

- **Frontend**: [Astro](https://astro.build/) con enfoque mobile-first
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Diseño**: [Figma](https://figma.com/) para la interfaz
- **Backend / API**: Astro Endpoints (Node.js) para servir servicios y productos, y gestionar formularios
- **Correo**: Integración del backend con la API externa de [Resend](https://resend.com) para el envío de formularios de contacto
- **Base de datos**: MySQL alojado en Azure (Azure Database for MySQL Flexible Server)
- **Despliegue**: [Azure App Service](https://azure.microsoft.com/es-es/products/app-service/) para la app web + Azure Database for MySQL