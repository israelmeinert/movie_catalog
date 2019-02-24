import React, { Component } from 'react';
import './movieDetails.css';

export class AgrMovieDetails extends Component {


  render(){
    const { movie } = this.props;
    return (
    <div className="backdrop" >
      <div className="modal" id="modal">
        <div className="content-container">
          <div className="image-container">
            <img src={movie.image} alt={movie.title} className="poster-image" />
          </div>
          <div className="info-container">
            <h3>{movie.title} </h3>
            <div>
              <p> {movie.description} </p>
            </div>
            
            <div className="info">
              <p>Ano: {movie.year}</p>
            </div>

            <div className="info">
              <p>Gênero: {movie.genre}</p>
            </div>
            <div className="info"> 
              <p>Direção: {movie.director}</p> 
            </div>
            <div className="info">
            <p> Prêmios: {movie.awards}</p>
            </div>
            <div className="footer">
              <button className="close" onClick={this.props.onClose}>
                Ok
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
  }
}