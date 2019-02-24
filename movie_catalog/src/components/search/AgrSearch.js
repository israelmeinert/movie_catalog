import React, { Component } from 'react';
import './search.css';

export class AgrSearch extends Component {

  render(){
    return (
      <div id="mov ies-search" className="search-container">
        <i className="fas fa-search"></i>
        <form action="" id="search-form">
            <input type="search" placeholder= "Pesquisar" id="search-field"  className="search-field" /> 
            <button type="submit"  className="search-button">APLICAR</button>
        </form>
      </div>
    )
  }
}