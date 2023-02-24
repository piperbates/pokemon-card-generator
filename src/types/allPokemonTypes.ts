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
        {move: {name: string}}
    ]
    types: [{
        type: {
        name: string,
        url: string
    }}
    ]
    sprites: {
        front_default: string
        other: {
            'official-artwork': {
                'front_default': string
            }
        }
    }
}