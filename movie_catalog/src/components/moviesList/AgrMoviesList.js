import React from 'react';
import './moviesList.css';



export function AgrMoviesList({ showDetails, movies }){

  const showDetails1 = movie =>{
   showDetails(movie);
  }

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
          { movies && movies.map( movie =>{
            return (
              <AgrMovieItem movie={movie} key={movie.id} showDetail={ showDetails1 } />
            ) 
          })}
        </tbody>
      </table>
    </div>

  )
}


const AgrMovieItem = ({ movie, showDetail })=> (
  <tr className="movie-item">
    <td className="movie-title-container"> 
      <a href="#" className="movie-title" onClick={ ()=> showDetail(movie)} > { movie.title }</a>
    </td>
    <td>{ movie.year }</td>
    <td>{ movie.genre }</td>
  </tr>
)