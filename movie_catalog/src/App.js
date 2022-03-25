import React, { useState } from 'react';

import { 
    AgrHeader,
    AgrSearch,
    AgrMoviesList,
    AgrMovieDetails
} from './components/components.js';

import { 
    subscribeMovies,
    subscribeSelectedMovie,
    searchTitle,
    selectMovie
} from './services/movies';

import '@fortawesome/fontawesome-free/css/all.css';


function App () {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  subscribeMovies(setMovies);
  subscribeSelectedMovie(setSelectedMovie);

  return (
    <div className="App">
      <AgrHeader></AgrHeader>
      <main>
        <AgrSearch search={searchTitle} ></AgrSearch>
        <AgrMoviesList movies={movies} showDetails={ selectMovie }></AgrMoviesList>
      </main>
      {(selectedMovie ? <AgrMovieDetails movie={selectedMovie} closeModal={selectMovie}
      > </AgrMovieDetails> : '' )}
      
    </div>
  );

}

export default App;
