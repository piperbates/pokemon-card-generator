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
    pokeBox.classList.remove(type);
}

let id = "12";
async function getData(){

    hidden.classList.remove("no-display");
    removeType();
    let response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await response1.json(); 

    
    //pokemon type
    const pokeType1 = data["types"]["0"]["type"].name
    const type1Caps = capitalise(pokeType1); //capitalises type
   

    if (data["types"][1]){
        const pokeType2 = data["types"][1]["type"].name;
        const type2Caps = capitalise(pokeType2);
        typeBox.innerText = `${type1Caps} | ${type2Caps}`;
    } else {
        typeBox.innerText = `${type1Caps}`;
    }


       
    //Change bg color depending on type

    pokeBox.classList.add(pokeType1);
        


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
    
    const getMove1Data = data["moves"]["0"];
    const move1Info = getMove1Data["move"].name;
    const move1Caps = capitalise(move1Info);

    if(data["moves"]["1"]){
        const getMove2Data = data["moves"]["1"]["move"].name;
        const move2Caps = capitalise(getMove2Data);
        pokemonMove1.innerText = move1Caps;
        pokemonMove2.innerText = move2Caps;
    } else {
        pokemonMove1.innerText = move1Caps;
        pokemonMove2.innerText = "";
    }

    // let pokesMove2 = getMove2Data["move"].name;
    // let move2Caps = capitalise(pokesMove2);
    // pokemonMove1.innerText = move1Caps;
    // pokemonMove2.innerText = move2Caps;
    // } else {
    //     pokemonMove1.innerText = move1Caps;
    //     pokemonMove2.innerText = move2Caps;
    // };



    //ability
    const pokeAbility = data["abilities"][0]["ability"].name;
    const pokeAbilityCaps = capitalise(pokeAbility);
    pokemonAbility.innerText=pokeAbilityCaps;
}

function dexId(){
    id = input.value;
    if(id >= 808){
       alert("Insert a number between 1-807");
    } else if (id==="0") {
    alert("Insert a number between 1-807");
    } else if (id === "") {
        alert("Insert a number.");
    } else {
    getData();
    }
}


function randomId(){
    id = Math.floor(Math.random() * 807)
    getData();
    }

    function previousId(){
        id --
        getData();
    }
    function nextId(){
        id ++
        getData();
    }

    document.addEventListener('DOMContentLoaded', randomId, false);

button.addEventListener("click", randomId);
button2.addEventListener("click", dexId);

previous.addEventListener("click", previousId);
next.addEventListener("click", nextId);