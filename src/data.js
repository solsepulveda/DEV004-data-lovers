// estas funciones son de ejemplo
/* const funciones = {
  title : title,
  img : img
};

function title (anything) { // anything es para que al llamar la función ocupes cualquier parametro
  const titulo = []; // crear arreglo vacio
  for (const movie of anything) {        
    const movieTitle = movie.title;   
    titulo.push(movieTitle); // se agraga el titulo después de el último elemento del arreglo
  }  
}

function img (anything) {
  const poster = [];
  for (const imagen of anything) {
    const movieImg = imagen.poster;    
    poster.push(movieImg);
  }
}*/

/* function movieList(anything){  
  const movies = Object.entries(anything);
  // console.log(movies);
  return movies;
} */

//function movieNames(anything)

export const alphabeticOrderAsc = function (anyArray) {
  const orderAZ = anyArray.sort();
  return orderAZ;
};

export const alphabeticOrderDes = function (a, b) {
  if (a > b)
    return -1;
  if (a < b)
    return 1;
  return 0;
};

// export default funciones;