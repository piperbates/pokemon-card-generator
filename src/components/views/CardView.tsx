import { PokemonDataContext } from "@/context/PokemonDataContext";
import { PokemonType } from "@/types/allPokemonTypes";
import { useContext, useState } from "react";
import Card from "../Card/Card";

export default function CardView() {
    const { currentPokemonData } = useContext(PokemonDataContext)
    
    return currentPokemonData 
        ? <Card 
            name={currentPokemonData.name}
            id={currentPokemonData.id} 
            moves={currentPokemonData.moves}
            height={currentPokemonData.height}
            weight={currentPokemonData.weight}
            hp={currentPokemonData.hp}
            ability={currentPokemonData.ability}
            types={currentPokemonData.types}
            sprite={currentPokemonData.sprite}
            mainType={currentPokemonData.mainType}
            /> 
        : null
}