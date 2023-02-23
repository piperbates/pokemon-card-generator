import { Inter } from '@next/font/google'
import Link from 'next/link'
import PageLayout from '@/components/Layout/PageLayout'
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { PokemonType } from '@/types/allPokemonTypes'
import fetchData from '@/utils/fetchData'
import { urls } from '@/utils/urls'
import { PokemonDataContext } from '@/context/PokemonDataContext'
import Card from '@/components/Card/Card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [allPokemonData, setAllPokemonData] = useState<PokemonType[] | any>(null);
  const [currentPokemonData, setCurrentPokemonData] = useState<PokemonType[] | any>(null);
  const [selectedPokemon, setSelectedPokemon] = useState('')

useEffect(()=>{
  const pokemonSetter = async() => {
    const allPokemonData = await fetchData(`${urls.pokemon}`);
    setAllPokemonData(allPokemonData)
  };
  pokemonSetter()
}, [])

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSelectedPokemon(e.target.value)
}

const handleClick = () => {

  const getSelectedPokemonData = async (pokemonUrl: string) => {
    const pokemonData = await fetchData(pokemonUrl)
    setCurrentPokemonData(pokemonData);
  }

    allPokemonData.results.map((pokemon: any) => {
      if(pokemon.name === selectedPokemon)
        {
          getSelectedPokemonData(pokemon.url);
        }
    })
}

  return (<>
      <PageLayout headerText="Pokemon Card Generator">
      <main>
        <div>
          <input type="text" onChange={(e)=>handleInputChange(e)} />
          <button onClick={handleClick}>Get Pokemon</button>

          <PokemonDataContext.Provider value={{
            currentPokemonData,
            setCurrentPokemonData
          }
          }>
            <Card />
          </PokemonDataContext.Provider>

          <br />
          <Link href="/about">About</Link>
        </div>
      </main>
      </PageLayout>
      </>
  )
}
