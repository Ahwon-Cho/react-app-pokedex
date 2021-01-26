import React, { Component } from 'react'
import './App.css';
import Pokedex from './Pokedex'
import Pokecard from './Pokecard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard 
        name = "Charmender"
        id = {4}
        type = "fire"
        exp = {6}
        />
      </div>
    )
  }
}

export default App;
