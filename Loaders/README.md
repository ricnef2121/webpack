## Loaders

Webpack solo entiende Javascript y archivos Json. Los `loaders` permiten que webpack pueda procesar otro tipo
de archivos y convertirlos en modulos validos, que puedan ser consumidos por la aplicacion a crear, ademas de ser agregado al arbol de
depencias de webpack.

Para configurar un loader se debe crear  `rules` la cual debe de ir dentro de un `module`
```js
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: []
  }
};
```

Los  loaders se encuentra en un nivel alto de configuracion, estos tiene dos propiedades "test" y "use".



+ La propiedad `test` identifica el tipo de archivo o archivos que se deberan transformar.
+ La propiedad `use` indica el loader que se debera usar para realizar la transformacion.

```js
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```