import React, { Component } from 'react';
import './search.css';

export class AgrSearch extends Component {

  constructor(){
    super();
    this.state = {querySearch: ''};
    this.titleMovie = '';
  }

  inputHandler = event =>{
    let { querySearch } = this.state;
    querySearch = event.target.value;
    this.setState({querySearch});
  }
  render(){
    let { querySearch } = this.state;
    return (
      <div id="mov ies-search" className="search-container">
        <i className="fas fa-search"></i>
        <input value={ querySearch } onChange={this.inputHandler} type="search" placeholder= "Pesquisar" id="search-field"  className="search-field" /> 
        <button type="submit" onClick={()=>this.props.search(querySearch)} className="search-button">APLICAR</button>
      </div>
    )
  }
}