export default class OmdbApi {

  constructor(){
    this.key = 'ed5b01ef';
    this.url = `http://www.omdbapi.com/?apikey=${this.key}`;
    this.itensPerPage = 10;
  }

  async request(query){
    let response = await fetch(`${this.url}${query}`);
    return response.json()
  }

  async findById(movieId){
    try{
      const movies = await this.request(`&i=${movieId}`)
      if(movies)
        return this.prepareMovie(movies);
      return null;
    } catch(error) {
      console.log(error);
      throw Error("Error on find the movie by id");
    }  
  }
  
  prepareMovie(movie){
    return { 
      id: movie.imdbID, 
      title:  movie.Title, 
      year: movie.Year, 
      genre: movie.Genre ,
      description: movie.Plot,
      image: movie.Poster,
      director: movie.Director,
      awards: movie.Awards

    };
  }

  async findByTitle(title){
    try {
      const movie = await this.request(`&t=${title}`);
      if(movie)
        return this.prepareMovie(movie);
    } catch(error) {
      console.log(error);
      throw Error("Error on find the  movie by title");
    }

  }

  async SearchByTitle(title, year){
    try {
      const movies = await this.request(`&s=${title}`);
      if(movies)
        return this.prepareListMovies(movies);
    } catch(error) {
      console.log(error);
      throw Error("Error on find the  movie by title");
    }

  }

  prepareListMovies({ Search }){
    let movies = Search
    movies = movies.map( (movie, counter) =>{
      if (counter < this.itensPerPage)
        return this.findById(movie.imdbID);
      return null
    });
    return Promise.all(movies)
    
  }
}