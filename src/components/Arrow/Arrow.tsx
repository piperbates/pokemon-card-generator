import { PokemonDataContext } from "@/context/PokemonDataContext";
import fetchData from "@/utils/fetchData";
import { urls } from "@/utils/urls";
import { useContext } from "react";
import styles from '../../styles/CardLayout.module.css' 


type ArrowProps = {
    direction: number,
    label: string
}

export default function Arrow (props: ArrowProps) {

    const { direction, label } = props;

    const { currentPokemonData, setCurrentPokemonData } = useContext(PokemonDataContext);

    const type = currentPokemonData?.types[0].type.name;

    const handleClick = () => {
        if(currentPokemonData) {
            const getNewPokemon = async () => {
            const newNumber = currentPokemonData?.id + direction;
            const newData = await fetchData(`${urls.pokemon}/${newNumber}`)
            setCurrentPokemonData(newData)
            }
            getNewPokemon()
        }
    }
    
    return (
        <button onClick={handleClick} className={`${styles.arrow} ${type}`}>
            {label}
        </button>
    )
}