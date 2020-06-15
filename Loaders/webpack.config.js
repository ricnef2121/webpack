const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        //le decimos a webpack donde se encontraran lo archivos extras generados
        publicPath:'dist/'
    },
    mode:'none',
    //definimos un module para nuestros loaders
    module:{
        rules:[
            {
                //le decimos a webpack cuantos tipos tipos de archivos debe tranformar
                test:/\.(png|jpg)$/,
                //le decimos a webpack con que transformarlo
                use:'file-loader'
            }
        ]
    }
}