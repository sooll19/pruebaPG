const movies = require("./movies");
require(`colors`);

//console.log(movies)

const moviesDH = {
 movies,
searchMovie : function(titulo){
   return this.movies.filter(pelicula => pelicula.titulo === titulo) || null;
},
searchMovieByGenre : function (genero){
   return this.movies.filter(peliculas => peliculas.genero === genero) || null;
},
totalPrice : function(){
  let total = this.movies.reduce((acum,num)=> acum + num.precio,0);
  return total

},
changeMovieGenre: function(id, nuevoGenero) {
   const peliculaEncontrada = this.movies.find(pelicula => pelicula.Id === id);
   if(peliculaEncontrada) {
   peliculaEncontrada.genero = nuevoGenero;
   return peliculaEncontrada;
   } else {
   return null;
   }
   }
}
console.log(moviesDH.searchMovie("Joker"))
console.log(moviesDH.searchMovieByGenre("Acción"))
console.log(moviesDH.totalPrice())
console.log(movies);
console.log(moviesDH.changeMovieGenre(2,"Acción"))