import OmdbApi from '../api/OmdbApi';
const omdbApi = new OmdbApi()

const moviesCallback = [];
const movieSelectedCallback = [];

const subscribeMovies = callback => moviesCallback.push(callback);
const subscribeSelectedMovie = callback => movieSelectedCallback.push(callback);



// dispatcher
const dispatchMovies = movies => moviesCallback
        .forEach( cb => cb(movies));

const dispatchMovieSelected = movie => movieSelectedCallback
        .forEach( cb => cb(movie));

// actions 
const searchTitle = async (title) => {
    let resultMovie = [];
    try {
        resultMovie = await omdbApi.SearchByTitle(title)
    } catch (error) {
        resultMovie = [];
    }
    dispatchMovies(resultMovie);
}

const selectMovie = movie => dispatchMovieSelected(movie)

export { subscribeMovies, subscribeSelectedMovie, searchTitle , selectMovie }