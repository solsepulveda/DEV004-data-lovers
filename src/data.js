// estas funciones son de ejemplo
const funciones = {
  title : title,
  img : img
};

function title (anything) {
  const titulo = [];
  for (const movie of anything) {        
    const movieTitle = movie.title;   
    titulo.push(movieTitle);
  }  
}


function img (anything) {
  const poster = [];
  for (const imagen of anything) {
    const movieImg = imagen.poster;    
    poster.push(movieImg);
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