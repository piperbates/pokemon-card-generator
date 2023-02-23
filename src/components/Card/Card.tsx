import { PokemonDataContext } from "@/context/PokemonDataContext"
import { useContext } from "react"
import styles from '../../styles/PageLayout.module.css' 

export default function Card() {
    const { currentPokemonData } = useContext(PokemonDataContext);

    //HP value
    // console.log(currentPokemonData?.stats[0].base_stat)

    return (
    <div className={styles.card}>
        {currentPokemonData?.name}

        <img src={currentPokemonData?.sprites.front_default} className='pokemon-img'/>
        
        <div className="type-box">
        {currentPokemonData?.types.map(({type})=> {
            return <p key={type.name}>{type.name}</p>
        })}
        </div>
    </div>
    )
}