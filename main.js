const url = "https://pokeapi.co/api/v2/";
document.getElementById("search-by-name-button").addEventListener("click",()=>{
    let pokemon_Name= document.getElementById("search-pokemon").value;
    let pokemon_name=pokemon_Name.toLowerCase();
    console.log(pokemon_name);
    let pokemonSpecie = document.getElementById("pokemon's-evolvs");
    let previousUrl;
    let pokeOldImg = document.getElementById("poke-old-pic");
    let older_id = "";
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
            move.innerHTML = pokemon.name+"'s last 6 moves are: " + `${pokemon.moves[i-6].move.name}, ${pokemon.moves[i-5].move.name}, ${pokemon.moves[i-4].move.name}, ${pokemon.moves[i-3].move.name}, ${pokemon.moves[i-2].move.name}, ${pokemon.moves[i-1].move.name}`;
            let pokemonPic = document.getElementById("pokemon's-pic");
            pokemonPic.src = pokemon.sprites.front_default;         
            }
        getpokemon();
        async function oldpokemon(){
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`);
            const previousversion = await resp.json();
            console.log(previousversion);                    
            pokemonSpecie.innerHTML = previousversion.name+"'s evolutions: "+previousversion.evolves_from_species.name; 
            previousUrl = previousversion.evolves_from_species.url;
            console.log(previousUrl);
            oldpokeimg(previousUrl);
            }
        oldpokemon();
        async function oldpokeimg(url=previousUrl){
            console.log(url);
            const respo = await fetch(previousUrl);
            const olderpokemon = await respo.json();
            console.log(olderpokemon);
            older_id=olderpokemon.id;
            console.log(older_id);
            oldpokemon(older_id);
            }
            
        oldpokeimg();
    ;
        async function oldpokeimg2(OP=older_id){
            console.log(OP);
            const respon = await fetch (`https://pokeapi.co/api/v2/pokemon/${older_id}`);
            const previouspokemon = await respon.json();
            pokeOldImg.src = previouspokemon.sprites.back_default;
        }
        oldpokeimg2();
        /*
        



        let evo_chain = previousversion.evolution_chain.url;
        console.log(evo_chain)
            
        async function evo(){
            const res = await fetch(evo_chain);
            const evl = await res.json();
            let evolution = document.getElementById("evo");
            evolution.innerHTML = evl.name;
            console.log(evolution);
            }  */               
})
       



