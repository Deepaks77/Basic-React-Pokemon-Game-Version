import React, { Component } from 'react'
import Pokedex from "./Pokedex"

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }
    render() {
        //sir has done in other way of dividing shuffled array in two hands
        const shuffleArray = this.props.pokemon.sort(() => Math.random() - 0.5);
        const randomHand1 = shuffleArray.splice(0, 4);
        const randomHand2 = shuffleArray.splice(0, 4);
        const sumHand1 = randomHand1.reduce((acc, ele) => {
            return acc + ele.base_experience
        }, 0)
        const sumHand2 = randomHand2.reduce((acc, ele) => {
            return acc + ele.base_experience
        }, 0)
        return (
            <div>
                <Pokedex hands={randomHand1} isWinner={sumHand1>sumHand2} sum={sumHand1}/>
                <Pokedex hands={randomHand2} isWinner={sumHand2>sumHand1} sum={sumHand2}/>
            </div>
        )
    }
}

export default Pokegame;