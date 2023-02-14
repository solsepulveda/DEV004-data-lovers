import { alphabeticOrderAsc, alphabeticOrderDes } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const movies = data.films;
const root = document.getElementById("root");
//console.log(movies);


const titleImage = (movies) => {
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
titleImage(movies);


const orderBy = (movies) => { 
  //const orderAZ = alphabeticOrderAsc(movies);
  //console.log(orderAZ);
  const buttonSelection = document.getElementById("order")
  buttonSelection.addEventListener("change", () => {
    const selectedOption = document.querySelector("#order option:checked").value;    
    if (selectedOption === "a-z"){
      root.innerHTML = "";
      const orderAZ = alphabeticOrderAsc(movies);    
      titleImage(orderAZ);
    }
    if (selectedOption === "z-a"){
      root.innerHTML = "";
      const orderZA = alphabeticOrderDes(movies);
      titleImage(orderZA);
    }
  });
  
}
orderBy(movies);
  

/* const orderByZA = (movies) => { 
  const orderZA = alphabeticOrderDes(movies);
  console.log(orderZA);
  const buttonZA = document.getElementById("order")
  buttonZA.addEventListener("change", () => {titleImage(orderZA)})
}
orderByZA(movies); */
