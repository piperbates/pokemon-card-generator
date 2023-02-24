import styles from '@/styles/Card.module.css' 
import CardBox from "./CardBox";
import { PokemonType } from "@/types/allPokemonTypes";


export default function Card(props: PokemonType) {

    const { name, sprites, id, moves, height, weight, stats, abilities, types } = props;
    
    const formattedMoves = moves.slice(0, 2);
    const formattedAbilities = abilities[0].ability.name;
    const mainType = types[0].type.name;

    const capitalizer = (item: string) => {
        const removeHyphen = item.split("-");
        const capitalisedItem = removeHyphen.map((word)=>{
            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        return capitalisedItem.join(' ');
    }

    return (
    <div className={`${styles.card} ${mainType}`}>
        <div className={styles.cardHeader}>
            <div className={styles.pkmnNameBox}>{capitalizer(name)}</div>
            <div className={styles.hpBox}>HP: {stats[0].base_stat}</div>
        </div>

        <div className={styles.pokemonImg}>
            <img src={sprites.other["official-artwork"]["front_default"]} className='pokemon-img'/>
            <div className={styles.typeBox}>
                {types.map(({type})=> <div className={styles.type} key={type.name}>{capitalizer(type.name)}</div>)}
            </div>
        </div>

        <div className={styles.statsBox}>
            <div className={styles.stat}>#{id}</div>

            <div className={styles.stat}>{weight / 10}kg</div>
            
           <div className={styles.stat}>{height / 10}m</div>
        </div>

        <CardBox header="Moves">
            <div>
                {formattedMoves?.map(({move})=>{
                    const formattedMove = capitalizer(move.name)
                    return <div className={styles.move} key={move.name}>{formattedMove}</div>
                })}
            </div>
        </CardBox>

        <CardBox header="Abilities">
            <div>{formattedAbilities ? <p>{capitalizer(formattedAbilities)}</p> : null}</div>
        </CardBox>

        <div className={styles.copyrightBox}>
        Pokémon &copy; Nintendo
        </div>
        
    </div>
    )
}