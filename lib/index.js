"use strict";

require("fslightbox");

/*import _ from 'lodash'; 
import Swal from 'sweetalert2'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  import {suma, resta, producto, saludo} from './operaciones.js';

document.write(`<h2>${suma(1,2)}</h2>`)

console.log(resta(5,8));
console.log(saludo);*/

/*Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })*/

/*Swal.fire({
  title:"Sergio Borjon Espejel",
  imageUrl: 'https://i.ytimg.com/vi/PIgyg46AMFg/hqdefault.jpg',
  imageHeight: 200,
  imageAlt: 'A tall image'
})*/
fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};