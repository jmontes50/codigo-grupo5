# PASOS PARA CREAR UN PROYECTO EN REACT

## Instalación

- Tener instalado NodeJS
- Instalar yarn `npm install -g yarn`
- Creamos el proyecto de react `npx create-react-app nombre_proyecto`

## Limpiar el proyecto que se crea por defecto

- Borramos los siguientes archivos internos del proyecto dentro de la carpeta `/src`
  - `App.css`
  - `App.test.js`
  - `reportWebvitals.js`
  - `index.css`
  - `logo.svg`

- Borrar todo y colocar el siguiente código en `App.js`:

```sh
  import React from 'react'

  const App = () => {
    return (
      <div>
        Hola Mundo
      </div>
    )
  }

  export default App
```
- En el archivo `index.js` borrar todo y colocar el siguiente código:

```sh
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  ReactDOM.render(<App />, document.getElementById('root'));
```

- Finalmente, ejecutar el proyecto en react con el siguiente comando: `npm start`
- Ojo que en la consola, debemos estar dentro de la carpeta del proyecto


