//DOM Objects

const pokeBox = document.querySelector("#poke-box");
const pokemonName = document.querySelector("#poke-name");
const pokemonHP = document.querySelector("#poke-hp");
const pokemonInfoBox = document.querySelector("#misc-info-box");
const pokemonImg = document.querySelector("#poke-image");
const pokemonMoveBox = document.querySelector("#move-info");
let pokemonMove1 = document.querySelector("#move1");
let pokemonMove2 = document.querySelector("#move2");
let pokemonAbility = document.querySelector("#ability");
let button = document.querySelector("button");
let typeBox = document.querySelector("#type-box");

//variables and arrays

const allTypes = [
    "bug", "dark", "dragon",
    "electric", "fairy", "fighting",
    "fire", "flying", "ghost",
    "grass", "ground", "ice", 
    "normal", "poison", "psychic",
    "rock", "steel", "water"
];


//functions

function capitalise(string){
    let toCapital = string.charAt(0).toUpperCase() + string.slice(1)
    return toCapital
}

function removeType(){
    for(const type of allTypes)
    pokeBox.classList.remove(type)
}

async function getData(){
    removeType();
    let id = Math.floor(Math.random() * 809)

    let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response1.json(); 

    
    //pokemon type
    const pokeType1 = data["types"][0]["type"].name;
    //const pokeType2 = data["types"][1]["type"].name;

    //Change bg color depending on type

    pokeBox.classList.add(pokeType1)


        //capitalises the Pokemons name and displays it on the card
    let pokeName = data["name"];
    let pokeNameCapital = capitalise(pokeName);
    pokemonName.innerText = pokeNameCapital;

    //displays the HP stat on the card
    const pokeHP = data["stats"]["0"]["base_stat"];
    pokemonHP.innerText= `${pokeHP}HP`

    //Provides the data for the misc info box
    const pokeId = data["id"];
    const pokeWeight = data["weight"];
    const pokeHeight = data["height"];
    pokemonInfoBox.innerText= `Number ${pokeId} | Weight ${pokeWeight} | Height ${pokeHeight}`

    //The pokemon image 
    const pokeImg = data["sprites"]["front_default"];
    pokemonImg.src=pokeImg;



   


    //Pokemon Moves
    const pokeMove1 = data["moves"]["0"]["move"].name;
    const move1Caps = capitalise(pokeMove1);
    const pokeMove2 = data["moves"]["1"]["move"].name;
    const move2Caps = capitalise(pokeMove2);
    pokemonMove1.innerText = move1Caps;
    pokemonMove2.innerText = move2Caps;

    //ability
    const pokeAbility = data["abilities"][0]["ability"].name;
    const pokeAbilityCaps = capitalise(pokeAbility);
    pokemonAbility.innerText=pokeAbilityCaps;
}

button.addEventListener("click", getData);