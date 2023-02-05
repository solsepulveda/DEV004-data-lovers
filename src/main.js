import funciones from './data.js';
import data from './data/ghibli/ghibli.js';

/* const movies = data.films;
const title = funciones.movieList(movies); */

const movies = data.films;
const root = document.getElementById("root");

const titulo = funciones.title(movies);
const movieDiv = document.createElement("div");
movieDiv.innerHTML = titulo; 
root.appendChild(movieDiv);


const imagen = funciones.img(movies);
const otroDiv = document.createElement("img");    
otroDiv.src = imagen;
root.appendChild(otroDiv);


// console.log(title);
