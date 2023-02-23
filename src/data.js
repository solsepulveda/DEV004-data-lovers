
export const alphabeticOrderAsc = function (anyArray) {
  const orderAZ = anyArray.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
  return orderAZ;  
};

export const alphabeticOrderDes = function (anyArray) {
  const orderZA = anyArray.sort((a, b) => (a.title > b.title) ? -1 : (a.title < b.title) ? 1 : 0);
  return orderZA;
};

export const mappedDirector = function(anyArray) {
  const director = anyArray.map(anyArray => anyArray.director)
  return director;
}

export const filteredDirector = function(anyArray) {
  const onlyDirectorName = anyArray.filter((director, index) => {
    return anyArray.indexOf(director) === index
  })
  return onlyDirectorName
}

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