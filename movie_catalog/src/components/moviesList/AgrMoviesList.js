import React, { Component } from 'react';
import './moviesList.css';



export class AgrMoviesList extends Component{

  showDetails(movie){
    this.props.showDetails(movie);
  }

  render(){
    return (
      <div className="movies-list-container">
        <table id="movies-list" className="movies-list">
          <thead>
            <tr className="table-header">
              <th className="movie-title-container">Titulo</th>
              <th>Ano</th>
              <th>Genero</th>
            </tr>
          </thead>
          <tbody>
            { this.props.movies && this.props.movies.map( movie =>{
              return (
                <AgrMovieItem movie={movie} showDetail={ this.showDetails.bind(this)} />
              ) 
            })}
          </tbody>
        </table>
      </div>

    )
  }
}


const AgrMovieItem = (props)=> (
  <tr className="movie-item" key={props.movie.id}>
    <td className="movie-title-container"> <a className="movie-title" onClick={ ()=> props.showDetail(props.movie)} > { props.movie.title }</a></td>
    <td>{ props.movie.year }</td>
    <td>{props.movie.genre}</td>
  </tr>
)

const AgrPanelDetails = (props) =>(
  <dialog>
    teste
  </dialog>
);