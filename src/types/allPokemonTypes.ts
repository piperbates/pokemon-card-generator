export type PokemonType = {
    name: string,
    dex: number,
    weight: number,
    height: number,
    stats: [
        {stat: {
            name: string,
        },
        base_stat: number}
    ]
    abilities: {
        ability: [
            name: string
        ]
    },
    moves: [
        move: string
    ]
    types: [{
        type: {
        name: string,
        url: string
    }}
    ]
    sprites: {
        front_default: string
    }
}