import { PokemonDataContext } from "@/context/PokemonDataContext";
import { PokemonType } from "@/types/allPokemonTypes";
import { useContext, useState } from "react";
import Card from "../Card/Card";

export default function CardView() {
    const { currentPokemonData } = useContext(PokemonDataContext)
    
    console.log(currentPokemonData)
    return currentPokemonData 
        ? <Card 
            name={currentPokemonData.name}
            id={currentPokemonData.id} 
            moves={currentPokemonData.moves}
            height={currentPokemonData.height}
            weight={currentPokemonData.weight}
            stats={currentPokemonData.stats}
            abilities={currentPokemonData.abilities}
            types={currentPokemonData.types}
            sprites={currentPokemonData.sprites}
            /> 
        : null
}