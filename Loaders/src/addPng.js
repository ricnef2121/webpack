//importamo la imagen que queremos agregar
import Webpack from '../webpack.png'
//creamos una funcion para agrega una imagen
function addPng(){
    //creamos nuestro elemento
    const img =document.createElement('img');
    //definimos un alt
    img.alt = 'Webpack';
    //definimos un ancho
    img.width = 300;
    //definimos la ruta de donde se tomara la imagen
    img.src = Webpack;
    //creamos nuestro elemento typo Dom que se integrara al Dom de nuestra aplicacion
    const body = document.querySelector('body')
    body.appendChild(img);

}

export default addPng;