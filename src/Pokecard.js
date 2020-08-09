import React,{Component} from "react"
import "./Pokecard.css"
const Image_Api="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
class Pokecard extends Component{
   
    render(){
        const {id,name,type,exp}=this.props;
        
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-image">
                <img src={Image_Api+id.toString().padStart(3,"0")+".png"} alt={name}/>
                </div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data"> Exp: {exp}</div>
            </div>
        )
    }
}

export default Pokecard;