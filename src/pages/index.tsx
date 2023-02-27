import PageLayout from '@/components/Layout/PageLayout'
import { useEffect, useState } from 'react'
import { PokemonApiData, PokemonSearchType, PokemonType } from '@/types/allPokemonTypes'
import fetchData from '@/utils/fetchData'
import { formatPokemonData } from '@/utils/formatPokemonData'
import { urls } from '@/utils/urls'
import { PokemonDataContext } from '@/context/PokemonDataContext'
import CardLayout from '@/components/Layout/CardLayout'
import styles from '@/styles/Generator.module.css' 


export default function Home() {
  const [allPokemonData, setAllPokemonData] = useState<PokemonApiData[] | any>(null); // Change this from any to null
  const [currentPokemonData, setCurrentPokemonData] = useState<PokemonType[] | any>(null); // Change this from any to null
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
  const formattedPokemon = formatPokemonData(newPokemonData)
  setCurrentPokemonData(formattedPokemon)

}

const handleClick = () => {
  if(selectedPokemon === '') {
    alert('Please insert a Pokemon') // I don't like alerts so I'll chnge this later
  }
  const getSelectedPokemonData = async (pokemonUrl: string) => {
    const pokemonData = await fetchData(pokemonUrl)
    const formattedData = formatPokemonData(pokemonData)
    setCurrentPokemonData(formattedData);
  }

    allPokemonData.results.map((pokemon: PokemonSearchType) => { 
      // Refactor this function to be more scalable, potentially look into search algorithms??
      if(pokemon.name === selectedPokemon)
        {
          getSelectedPokemonData(pokemon.url);
        } 
    })
    setSelectedPokemon("")
}

  return (<>
      <PageLayout headerText="Pokemon Card Generator">
      <main>
        <div>
          <div className={styles.generatorHeader}>
          <p className={styles.introText}>
            { currentPokemonData 
              ? "Type in a Pokemon in the search box below or hit 'Get Random Pokemon' to get started"
              : "Welcome to the Pokemon Card Generator. Input a Pokemon in the search box below or hit 'Get Random Pokemon' to get started!"
            }
            </p>
            <input className={styles.pokemonInput} value={selectedPokemon} type="text" onChange={(e)=>   
              setSelectedPokemon(e.target.value.toLowerCase())
            } />
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
