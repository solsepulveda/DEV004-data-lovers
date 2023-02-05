// estas funciones son de ejemplo
const funciones = {
  title : title,
  img : img
};

function title (anything) {
  for (const movie of anything) {
    const movieTitle = movie.title;    
    return movieTitle
  }  
}


function img (anything) {
  for (const imagen of anything) {
    const movieImg = imagen.poster;    
    return movieImg    
  }
}






/* function movieList(anything){  
  const movies = Object.entries(anything);
  // console.log(movies);
  return movies;
} */

//function movieNames(anything)



export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export default funciones;