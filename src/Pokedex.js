import React, { Component } from 'react'
import Pokecard from "./Pokecard"
import "./Pokedex.css"
class Pokedex extends Component {
    render() {
        const { hands ,isWinner,sum } = this.props;
        let title;
        if(isWinner){
            title=<h1 className="Pokedex-winner">Winning Hand</h1>
        }
        else{
            title=<h1 className="Pokedex-loser">Losing Hand</h1>
        }

        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience : {sum}</h4>
                
                <div className="Pokedex-cards">
                    {hands.map(h => (
                        <Pokecard
                            key={h.id}
                            id={h.id}
                            name={h.name}
                            type={h.type}
                            exp={h.base_experience}
                        />
                    ))}
                </div>
            </div>
        )

    }
}

export default Pokedex;