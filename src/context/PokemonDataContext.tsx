import { PokemonType } from '@/types/allPokemonTypes'
import { createContext } from 'react'


type PokemonDataContextType = {
    currentPokemonData: PokemonType | null,
    setCurrentPokemonData: React.Dispatch<React.SetStateAction<PokemonType>>
}

export const PokemonDataContext = createContext<PokemonDataContextType>({
    currentPokemonData: null,
    setCurrentPokemonData: () => {}
    })