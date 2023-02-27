import { PokemonApiData, PokemonType } from "@/types/allPokemonTypes"

type FormatterType = {
    move: {
        name: string
    },
    stat: {
        name: string
    },
    type: {
        name: string,
    }
}

const capitalizer = (item: string) => {
    const removeHyphen = item.split("-");
    const capitalisedItem = removeHyphen.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return capitalisedItem.join(' ');
}

export const formatPokemonData = (data: PokemonApiData) => {

const formatMoves = () => {
    const formattedMoves = data.moves.slice(0, 2);
    return formattedMoves.map(({move}: FormatterType)=>{
        return capitalizer(move.name)
    })
} 

const hpStat = () => {
    const hpStatData = data.stats.filter(({stat}) => {
        return stat.name === "hp"
    })
    return hpStatData[0].base_stat;
}

const formatType = () => {
    return data.types.map(({type})=>{
        return capitalizer(type.name)
    })
}

    const name = capitalizer(data.name);
    const hp = hpStat();
    const ability = capitalizer(data.abilities[0].ability.name);
    const moves = formatMoves();
    const types = formatType();
    
    const formattedPokemonData: PokemonType = {
        name,
        id: data.id,
        weight: data.weight / 10,
        height: data.height / 10,
        hp,
        ability,
        moves,
        types,
        mainType: data.types[0].type.name,
        sprite: data.sprites.other["official-artwork"].front_default
    }

    return formattedPokemonData;
}