# Medikapp-test

Backend con Node - Express y MongoDB para el manejo de pacientes con una API rest

# Demo

👉 Puedes revisar la demo <a href="https://eiteck-prueba-frontend.netlify.app/">aquí</a>.
<br>

# Requisitos

- Node Js

# Instrucciones de uso Localmnte

- Descargar la carpeta
- Descomprimir
- Ejecutar dentro de la carpeta

```sh
$ npm install
```

- Crear un archivo llamado .env en la carpeta
- Agregar credenciales como el ejemplo provisto en el arhivo .env.example

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

- [React](https://es.reactjs.org/)
- [React-Icons](https://react-icons.github.io/react-icons)
- [Axios](https://github.com/axios/axios)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)

#### Estilos

- [StyledComponents](https://styled-components.com/)
- CSS

## Arquitectura usada

-Redux

## Deploy realizado con

- [Heroku](https://electron.atom.io)
