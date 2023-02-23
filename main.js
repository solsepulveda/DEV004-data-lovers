
import { alphabeticOrderAsc, alphabeticOrderDes, filteredDirector, mappedDirector } from "./data.js";
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
    movieDiv.innerHTML += ` <img src="${movie.poster}" alt="imágen de la película"><h2>${movie.title}</h2><h3>Director:<br>${movie.director}</h3>
    <p>Release Date:<br>${movie.release_date}</p><p1>Rate:<br> ${movie.rt_score}</p1>`//siempre poner en imágenes alt
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
};
orderBy(copyMovies);

const director = mappedDirector(movies);
const nameDirector = filteredDirector(director);
const directorOption = document.getElementById("directors");
const directorList = nameDirector;
for (let i = 0; i < directorList.length; i++){
  const list = document.createElement('option');
  list.innerHTML = directorList[i];
  directorOption.appendChild(list);
}

document.getElementById("directors").addEventListener("change", function(){
  const selectedOption = document.querySelector("#directors option:checked").value;
  let directorFilter;
  if (selectedOption === "Hayao Miyazaki") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hayao Miyazaki";
    });
  }
  else if (selectedOption === "Isao Takahata") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Isao Takahata";
    });
  }
  else if (selectedOption === "Yoshifumi Kondō") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Yoshifumi Kondō";
    });
  }
  else if (selectedOption === "Hiroyuki Morita") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hiroyuki Morita";
    });
  }
  else if (selectedOption === "Gorō Miyazaki") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Gorō Miyazaki";
    });
  }
  else if (selectedOption === "Hiromasa Yonebayashi") {
    directorFilter = movies.filter(function(movie) {
      root.innerHTML = "";
      return movie.director === "Hiromasa Yonebayashi";
    });
  }
  else {
    root.innerHTML = "";
    directorFilter = movies;
  }
  titleImage(directorFilter);
});

export const calculate = function(movies) {
  for (let i=0; i<movies.length; i++){
    const movie = movies[i];
    let femaleCount = 0;
    let maleCount = 0;
    for (let j=0; j<movie.people.length; j++) {
      const person = movie.people[j];
      if (person.gender === 'Female'){
        femaleCount += 1;
      }
      else if (person.gender === 'Male'){
        maleCount += 1;
      }
    }
    console.log(femaleCount);
    console.log(maleCount);
  }
}