
export const alphabeticOrderAsc = function (anyArray) {
  const orderAZ = anyArray.sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0);
  return orderAZ;  
};

export const alphabeticOrderDes = function (anyArray) {
  const orderZA = anyArray.sort((a, b) => (a.title > b.title) ? -1 : (a.title < b.title) ? 1 : 0);
  return orderZA;
};

export const filter = function(anyArray) {
  const director = anyArray.filter(function (){
    //codigo para extraer directores
    return director;
  });
};