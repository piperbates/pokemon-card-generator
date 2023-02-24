import { Inter } from '@next/font/google'
import Link from 'next/link'
import PageLayout from '@/components/Layout/PageLayout'
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { PokemonType } from '@/types/allPokemonTypes'
import fetchData from '@/utils/fetchData'
import { urls } from '@/utils/urls'
import { PokemonDataContext } from '@/context/PokemonDataContext'
import CardLayout from '@/components/Layout/CardLayout'
import styles from '@/styles/Generator.module.css' 

 

export default function Home() {
  const [allPokemonData, setAllPokemonData] = useState<PokemonType[] | any>(null);
  const [currentPokemonData, setCurrentPokemonData] = useState<PokemonType[] | any>(null);
  const [selectedPokemon, setSelectedPokemon] = useState('')

useEffect(()=>{
  const pokemonSetter = async() => {
    const allPokemonData = await fetchData(`${urls.allPokemon}`);
    setAllPokemonData(allPokemonData)
  };
  pokemonSetter()
}, [])

const amountOfPokemon = 1008;

const getRandomPokemon = async () => {
  const randomNumber = Math.floor(Math.random() * amountOfPokemon)
  const newPokemonData = await fetchData(`${urls.pokemon}/${randomNumber}`)
  setCurrentPokemonData(newPokemonData)
}

const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSelectedPokemon(e.target.value.toLowerCase())
}

const handleClick = () => {
  if(selectedPokemon === '') {
    alert('Please insert a Pokemon') // I don't like alerts so I'll chnge this later
  }
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
          <div className={styles.generatorHeader}>
            <input className={styles.pokemonInput} value={selectedPokemon} type="text" onChange={(e)=>handleInputChange(e)} />
            <button onClick={handleClick} className={styles.button}>Get Pokemon</button>
            <br />
            <button onClick={getRandomPokemon} className={styles.button}>Get Random Pokemon</button>
          </div>
        {
          currentPokemonData ?
          <PokemonDataContext.Provider value={{
            currentPokemonData,
            setCurrentPokemonData
          }
          }>
            <CardLayout />
          </PokemonDataContext.Provider>
          : 
          null
          }
        </div>
      </main>
      </PageLayout>
      </>
  )
}
