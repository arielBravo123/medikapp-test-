# Medikapp-test

Backend con Node - Express y MongoDB para el manejo de pacientes con una API rest

# Demo

👉 Puedes revisar la demo <a href="https://medik-app-test.herokuapp.com/">aquí</a>.
<br>

## Acerca de la API

# Como usar la API

# Instrucciones de uso Localmente

### Requisitos

- Node Js
- Cuenta Atlas MongoDB

### Proceso

- Descargar la carpeta de este repositorio
- Descomprimir
- Ejecutar dentro de la carpeta

```sh
$ npm install
```

- Crear un archivo llamado .env en la carpeta
- Agregar credenciales como el ejemplo provisto en el archivo .env.example

### Obtener credenciales de Mongodb Atlas

- Ingresar a mongo db atlas [aqui](https://www.mongodb.com/cloud/atlas) y crear una cuenta gratuita
- Crear un cluster en la versión gratuita
- Crear un usuario dentro del cluster creado en mongodb atlas
- En este caso se permitirá el acceso desde cualquier dirección ip por lo que no se necesita configurar esto en el cluster ya que por defecto permite cualquier dirección ip
- Obtener el link de conexión reemplazando las credenciales del usuario creado

- Ejecutar dentro del proyecto

```sh
$ npm start
```

## Desarrollado con

- [Node JS](https://es.reactjs.org/)
- [Express](https://react-icons.github.io/react-icons)
- [Mongo DB Atlas](https://github.com/axios/axios)

## Deploy realizado con

- [Heroku](https://electron.atom.io)
