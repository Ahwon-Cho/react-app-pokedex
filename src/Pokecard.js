import React, { Component } from 'react';
import './Pokecard.css'
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' ;

let padToThree = (number) => (number <= 999 ? `00`.slice(-3))

class Pokecard extends Component {
    render() {
        let imgSrc = ` ${POKE_API}${this.props.id}.png `;
        return(
            <div className="Pokecard">
                <h2 className="Pokecard-title">{this.props.name}</h2>
                <img src={imgSrc} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
};

export default Pokecard;