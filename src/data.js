
export const alphabeticOrderAsc = function (anyArray) {
  const orderAZ = anyArray.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
  return orderAZ;  
};

export const alphabeticOrderDes = function (anyArray) {
  const orderZA = anyArray.sort((a, b) => (a.title > b.title) ? -1 : (a.title < b.title) ? 1 : 0);
  return orderZA;
};

// extrae nombre de directores
export const mappedDirector = function(anyArray) {
  const director = anyArray.map(anyArray => anyArray.director)
  return director
}

//elimina nombres resptidos en directores
export const filteredDirector = function(anyArray) {
  const onlyDirectorName = anyArray.filter((director, index) => {
    return anyArray.indexOf(director) === index
  })
  return onlyDirectorName
}

export const people = function(anyArray) {
  const charactersMovies = anyArray.map(anyArray => anyArray.people) 
  return charactersMovies
}

export const peopleGender = function(anyArray) {
  const characterGender = anyArray.filter(character => {
    const gender = character.gender
    const female = [];
    if(gender === 'Female'){
      female.push(gender);
      return female.length
    }});
  return characterGender
}