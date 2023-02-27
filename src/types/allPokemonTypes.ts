export type PokemonType = {
    name: string,
    id: number,
    weight: number,
    height: number,
    hp: number,
    ability: string,
    moves: string[],
    types: string[],
    mainType: string,
    sprite: string
}

export type PokemonSearchType = {
    name: string,
    url: string,
}

export type PokemonApiData = {
    name: string,
    id: number,
    weight: number,
    height: number,
    moves: [],
    stats: [
        {base_stat: number, stat: {name: string}}
    ],
    types: [
        {type: {name: string}}
    ],
    abilities: [
        {ability: {name: string}}
    ],
    sprites: {
        other: {"official-artwork": {
            "front_default": string
        }}
    }
}