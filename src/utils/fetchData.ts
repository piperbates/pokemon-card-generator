export default async function fetchData (url: string){
    const res = await fetch(url);
    if(!res.ok){
        const message = `An error has occured: ${res.status}`;
        throw new Error(message);
    }
    const pokemonData = await res.json();
    return pokemonData;
  }