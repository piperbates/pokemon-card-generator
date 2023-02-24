import { PokemonDataContext } from "@/context/PokemonDataContext"
import { useContext, useEffect } from "react"
import styles from '@/styles/Card.module.css' 
import CardBox from "./CardBox";

export default function Card() {
    const { currentPokemonData } = useContext(PokemonDataContext);
    const moves = currentPokemonData?.moves.slice(0, 2);
    const abilities = currentPokemonData?.abilities[0].ability.name;
    const mainType = currentPokemonData?.types[0].type.name;

    const capitalizer = (item: string) => {
        const removeHyphen = item.split("-");
        const capitalisedItem = removeHyphen.map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return capitalisedItem.join(' ');
    }

    if(currentPokemonData?.moves[0].move.name) {    
        const firstMove = capitalizer(currentPokemonData?.moves[0].move.name)
}
    return (
    <div className={`${styles.card} ${mainType}`}>
        <div className={styles.cardHeader}>
            <div className={styles.pkmnNameBox}>{currentPokemonData && capitalizer(currentPokemonData?.name)}</div>
            <div className={styles.hpBox}>HP: {currentPokemonData?.stats[0].base_stat}</div>
        </div>

        <div className={styles.pokemonImg}>
            <img src={currentPokemonData?.sprites.other["official-artwork"]["front_default"]} className='pokemon-img'/>
            <div className={styles.typeBox}>
                {currentPokemonData?.types.map(({type})=> <div className={styles.type} key={type.name}>{capitalizer(type.name)}</div>)}
            </div>
        </div>

        <div className={styles.statsBox}>
            <div className={styles.stat}>#{currentPokemonData?.id}</div>

            {currentPokemonData?.weight && <div className={styles.stat}>{currentPokemonData?.weight / 10}kg</div>}
            
            {currentPokemonData?.height && <div className={styles.stat}>{currentPokemonData?.height / 10}m</div>}
        </div>

        <CardBox header="Moves">
            <div>
                {moves?.map(({move})=>{
                    const formattedMove = capitalizer(move.name)
                    return <div className={styles.move} key={move.name}>{formattedMove}</div>
                })}
            </div>
        </CardBox>

        <CardBox header="Abilities">
            <div>{abilities ? <p>{capitalizer(abilities)}</p> : null}</div>
        </CardBox>

        <div className={styles.copyrightBox}>
        Pokémon &copy; Nintendo
        </div>
        
    </div>
    )
}