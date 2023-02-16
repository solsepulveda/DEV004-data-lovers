import { alphabeticOrderAsc, alphabeticOrderDes} from '../src/data.js';


describe('alphabeticOrderAsc' , () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderAsc).toBe('function');
  });

  const  peliculas = [{"id": 1, "title":'uno', "generos": ['accion','terror']},
    {"id": 2, "title":'dos', "generos": ['terror']},
    {"id":3, "title":'tres', "generos": ['accion', 'comedia']}];

  it('alphabeticOrderAsc', () => {
    expect(alphabeticOrderAsc(peliculas)).toStrictEqual([{"id": 2, "title":'dos', "generos": ['terror']}, {"id":3, "title":'tres', "generos": ['accion', 'comedia']}, {"id": 1, "title":'uno', "generos": ['accion','terror']}]);
  });  
});


describe('alphabeticOrderDes', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderDes).toBe('function');
  });

  const  peliculas = [{"id": 1, "title":'uno', "generos": ['accion','terror']},
    {"id": 2, "title":'dos', "generos": ['terror']},
    {"id":3, "title":'tres', "generos": ['accion', 'comedia']}]

  it('alphabeticOrderDes', () => {
    expect(alphabeticOrderDes(peliculas)).toStrictEqual([{"id": 1, "title":'uno', "generos": ['accion','terror']}, {"id":3, "title":'tres', "generos": ['accion', 'comedia']}, {"id": 2, "title":'dos', "generos": ['terror']}]);
  });
});
