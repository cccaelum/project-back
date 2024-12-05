# REMIND ME (back-end)

Esta API es el backend de la app [Remind Me](https://remindmereminders.netlify.app/) donde guardaremos en la BBDD los usuarios registrados y logados con Firebase y los recordatorios ligados a estos users. También se guardan recordatorios no ligados a un usuario, ya que la app funciona además en modo anónimo.

Para inicializar el proyecto tenemos que instalar todas las dependencias con `npm i` y después inicializaremos el servidor con `npm start`

Para hacer que el proyecto completo funcione necesitaremos guardar lo siguiente en un archivo .env:

- Clave privada de firebase
- Mongo URI

Este proyecto está asociado con su front que está en https://github.com/cccaelum/project-front
La documentación de la API está disponible en [Postman](https://documenter.getpostman.com/view/38534667/2sAYBbcU2U).

## BASE DE DATOS
Construida en MongoDB y conectada desde `config.js`

## MODELOS
Este proyecto consta de dos modelos para la base de datos:
- `Reminder.js`: se registran los campos de los recordatorios. 
- `User.js`: al hacer registro desde el front conseguimos su UID, y gracias a ello conseguimos asociar cada usuario a su contenido.

## RUTAS
2 archivos con rutas:
- `reminders.js`: CRUD de los recordatorios (GET, POST, PUT, DELETE), asociada al controlador `Reminder.controller.js`
- `profile.js`: para datos de usuario (GET y POST), protegida por el `middleware/auth.js`

## DESPLIEGUE

Para el despliegue de la API se ha usado Render. Es importante añadir las variables de entorno necesarias (Mongo URI y las relacionadas con Firebase) en la configuración de Render antes del despliegue. 