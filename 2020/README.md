## Configuracion para usar webpack

### packages
yarn add webpack webpack-cli

### Creacion y configuracion de webpack.config.js
Creamos un archivo en la raiz del proyecto con el nombre de webpack.config.js

El archivo contiene la sigueinte configuracion

```js
module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    mode:'none'
}
```

entry : Correponde a la ruta donde se encuntra nuestro archivo principal de javascript , es decir nuestro main.

output.filename : Corresponde al nombre que se le dara al archivo que resulte despues de ser compilado el proyecto

output.path : Corresponde al lugar donde se guardara el archivo compilado (carpeta dist seria ./dist)

mode : Corresponde al mode de trabajo en que se esta ejecutando webpack (developmente/production/none)

### Agregando Script al archivo package.json para ejecutar webpack
En este caso agregamos en la seccion de scripts la palabra build la cual corresponde al comando webpack el cual compilara el contenido del entrypoint y lo de sepositara en la ruta del output

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack"
  },

### index.html
En el body de nuestro html agregamos el script que consuma el resultado
de el build para verlo funcionar

```html
<body>
    <script src="./dist/bundle.js"></script>    
</body>
```