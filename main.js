const url = "https://pokeapi.co/api/v2/";
document.getElementById("search-by-name-button").addEventListener("click",()=>{
    let pokemon_Name= document.getElementById("search-by-name-input").value;
    let pokemon_name=pokemon_Name.toLowerCase();
    console.log(pokemon_name);
        async function getpokemon(pokemon){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
            const pokemon = await response.json();
            console.log(pokemon);
        }
        getpokemon();
    })

