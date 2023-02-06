import ghibli from "./data/ghibli/ghibli.js";

const movies = ghibli.films;
const root = document.getElementById("root");

const deploy = (movies) => {
  for (const movie of movies) {
    /* const movieTitle = movie.title; */
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("card"); //clase para editar en css*/
    //con movie.title llamamos a la constante y le asignamos una etiqueta//
    movieDiv.innerHTML += `<h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="imágen de la película">`//siempre poner en imágenes alt
    root.appendChild(movieDiv);
  }
};
deploy(movies);


/* const img = (movies) => {
  for (const imagen of movies) {
    const movieImg = imagen.poster;
    const otroDiv = document.createElement("img");
    otroDiv.src = movieImg;
    root.appendChild(otroDiv);
  }
};
img(movies); */

console.log(ghibli);
