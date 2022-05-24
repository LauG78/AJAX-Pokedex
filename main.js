const url = "https://pokeapi.co/api/v2/";
document.getElementById("search-by-name-button").addEventListener("click",()=>{
    let pokemon_Name= document.getElementById("search-pokemon").value;
    let pokemon_name=pokemon_Name.toLowerCase();
    console.log(pokemon_name);
        async function getpokemon(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
            const pokemon = await response.json();
            console.log(pokemon);
            let name = document.getElementById("pokemon's-name");
            name.innerHTML = "pokemon's name: " + pokemon.name;
            let id = document.getElementById("pokemon's-id");
            id.innerHTML = pokemon.name+"'s id is :" + pokemon.id;
            let move = document.getElementById("pokemon's-moves");
            let i = pokemon.moves.length;
            move.innerHTML = pokemon.name+"'s last 6 moves are: " + `${pokemon.moves[i-6].move.name} ${pokemon.moves[i-5].move.name}, ${pokemon.moves[i-4].move.name}, ${pokemon.moves[i-3].move.name}, ${pokemon.moves[i-2].move.name}, ${pokemon.moves[i-1].move.name}`;
            let pokemonPic = document.getElementById("pokemon's-pic");
            pokemonPic.src = pokemon.sprites.back_default;
            
        }
        getpokemon();
    })


