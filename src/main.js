
import { alphabeticOrderAsc, alphabeticOrderDes } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const movies = data.films;
const root = document.getElementById("root");
//console.log(movies);


const titleImage = (movies) => {
  for (const movie of movies) {
    // const movieTitle = movie.title;
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("card"); //clase para editar en css
    //con movie.title llamamos a la constante y le asignamos una etiqueta
    movieDiv.innerHTML += `<h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="imágen de la película">`//siempre poner en imágenes alt
    root.appendChild(movieDiv);
  }
};
titleImage(movies);

const copyMovies = data.films;
const orderBy = (copyMovies) => { 
  const buttonSelection = document.getElementById("order")
  buttonSelection.addEventListener("change", () => {
    const selectedOption = document.querySelector("#order option:checked").value;
    if (selectedOption === "a-z"){
      root.innerHTML = "";
      const orderAZ = alphabeticOrderAsc(copyMovies);
      titleImage(orderAZ);
    }
    if (selectedOption === "z-a"){
      root.innerHTML = "";
      const orderZA = alphabeticOrderDes(copyMovies);
      titleImage(orderZA);
    }
  });

}
orderBy(copyMovies);

/* var hayao = movies
.filter(function(movies){
return movies.director === "Hayao Miyazaki";
})

console.log(hayao);
//"Isao Takahata"

var isao = movies
.filter(function(movies){
return movies.director === "Isao Takahata";
})

console.log(isao);

//"Yoshifumi Kondō"
var yoshifumi = movies
.filter(function(movies){
return movies.director === "Yoshifumi Kondō";
})

console.log(yoshifumi);

//"Hiroyuki Morita"
var hiroyuki = movies
.filter(function(movies){
return movies.director === "Hiroyuki Morita";
})

console.log(hiroyuki);

//"Gorō Miyazaki"
var goro = movies
.filter(function(movies){
return movies.director === "Gorō Miyazaki";
})

console.log(goro);

//"Hiromasa Yonebayashi"
var hiromasa = movies
.filter(function(movies){
return movies.director === "Hiromasa Yonebayashi";
})

console.log(hiromasa);

var directors = movies.map(function(movie){
  return movie.director;
});

console.log(directors); */

document.getElementById("filter").addEventListener("change", function(){
  const selectedOption = document.querySelector("#filter option:checked").value;
  let directorFilter;
  if (selectedOption === "hayao") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hayao Miyazaki";
    });
  }else if (selectedOption === "isao") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Isao Takahata";
    });
  } else {
    root.innerHTML = "";
    directorFilter = movies;
  }
  titleImage(directorFilter);
});