import styles from '@/styles/Card.module.css' 
import CardBox from "./CardBox";
import { PokemonType } from "@/types/allPokemonTypes";


export default function Card(props: PokemonType) {

    const { name, sprite, id, moves, height, weight, hp, ability, types, mainType } = props;    
    return (
    <div className={`${styles.card} ${mainType}`}>
        <div className={styles.cardHeader}>
            <div className={styles.pkmnNameBox}>{name}</div>
            <div className={styles.hpBox}>HP: {hp}</div>
        </div>

        <div className={styles.pokemonImg}>
            <img src={sprite} className='pokemon-img'/>
            <div className={styles.typeBox}>
                {types.map((type: string, i)=> <div className={styles.type} key={i}>{type}</div>)}
            </div>
        </div>

        <div className={styles.statsBox}>
            <div className={styles.stat}>#{id}</div>

            <div className={styles.stat}>{weight}kg</div>
            
           <div className={styles.stat}>{height}m</div>
        </div>

        <CardBox header="Moves">
            <div>
                {moves.map((move, i)=>{
                    return <div className={styles.move} key={i}>{move}</div>
                })}
            </div>
        </CardBox>

        <CardBox header="Abilities">
            <div>{ability ? <p>{ability}</p> : null}</div>
        </CardBox>

        <div className={styles.copyrightBox}>
        Pokémon &copy; Nintendo
        </div>
        
    </div>
    )
}