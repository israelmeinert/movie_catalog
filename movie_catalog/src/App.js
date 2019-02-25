import React, { Component } from 'react';
import { AgrHeader } from './components/header/AgrHeader';
import { AgrSearch } from './components/search/AgrSearch';
import { AgrMoviesList } from './components/moviesList/AgrMoviesList';
import { AgrMovieDetails } from './components/movieDetails/AgrMovieDetails';
import OmdbApi from './api/OmdbApi';
import '@fortawesome/fontawesome-free/css/all.css';
const omdbApi = new OmdbApi();

class App extends Component {

  constructor(){
    super();
    this.state = { movies: [], selectedMovie: null}
  }

  showDetailMovie =  movie  =>{
    let { movies, selectedMovie  } =  this.state;
    selectedMovie = movie;
    this.setState({movies, selectedMovie});
  }

  findByTitle = (title)=>{
    let { movies, selectedMovie  } =  this.state;
    if (title){
      omdbApi.SearchByTitle(title)
      .then( movies => this.setState({ movies, selectedMovie }))
      .catch(error => console.log(error));
    } else {
      movies = [];
      this.setState({movies, selectedMovie})
    }
    
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
          <AgrSearch search={this.findByTitle} ></AgrSearch>
          <AgrMoviesList movies={this.state.movies} showDetails={ this.showDetailMovie}></AgrMoviesList>
        </main>
        {(this.state.selectedMovie ? <AgrMovieDetails movie={this.state.selectedMovie} closeModal={this.showDetailMovie}
        > </AgrMovieDetails> : '' )}
        
      </div>
    );
  }
}

export default App;
