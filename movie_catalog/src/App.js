import React, { Component } from 'react';
import { AgrHeader } from './components/header/AgrHeader';
import { AgrSearch } from './components/search/AgrSearch';
import { AgrMoviesList } from './components/moviesList/AgrMoviesList';
import { AgrMovieDetails } from './components/movieDetails/AgrMovieDetails';
import OmdbApi from './api/OmdbApi';
const omdbApi = new OmdbApi();

class App extends Component {

  constructor(){
    super();
    this.state = { movies: [], selectedMovie:null}
  }

  showDetailMovie( movie ){
    let { movies, selectedMovie  } =  this.state;
    selectedMovie = movie;
    console.log(selectedMovie);
    this.setState({movies, selectedMovie});
  }

  componentWillMount(){
    omdbApi.SearchByTitle('lord of the rings')
      .then( movies => this.setState({ movies }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <AgrHeader></AgrHeader>
        <main>
          <AgrSearch></AgrSearch>
          <AgrMoviesList movies={this.state.movies} showDetails={ this.showDetailMovie.bind(this)}></AgrMoviesList>
        </main>
        {(this.state.selectedMovie ? <AgrMovieDetails movie={this.state.selectedMovie}> </AgrMovieDetails> : '' )}
        
      </div>
    );
  }
}

export default App;
