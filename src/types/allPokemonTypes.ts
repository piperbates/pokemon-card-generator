import { StaticImageData } from "next/image"

export type PokemonType = {
    name: string,
    id: number,
    weight: number,
    height: number,
    stats: [
        {stat: {
            name: string,
        },
        base_stat: number}
    ]
    abilities: [
        ability: {
            ability: {name: string}
        }
    ],
    moves: [
        {move: {name: string}},
        {move: {name: string}}
    ]
    types: [{
        type: {
        name: string,
        url: string
    }}
    ]
    sprites: {
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}