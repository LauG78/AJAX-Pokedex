const url = "https://pokeapi.co/api/v2/";
document.getElementById("search-by-name-button").addEventListener("click",()=>{
    let pokemon_Name= document.getElementById("search-pokemon").value;
    let pokemon_name=pokemon_Name.toLowerCase();
    let pokemonSpecie = document.getElementById("pokemon's-evolvs");
    let previousUrl;
    let pokeOldImg = document.getElementById("poke-old-pic");
    let older_id = "";
        async function getPokemon(pokemon_name){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`+pokemon_name);
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
            console.log(pokemon_name);
            return pokemon;
        }
        async function oldpokemon(){
            const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon_name}`);
            const previousversion = await resp.json();
            console.log(previousversion);        
            let pokemonSpecie = document.getElementById("pokemon's-evolvs")            
            pokemonSpecie.innerHTML = previousversion.name+" evolved from: "+previousversion.evolves_from_species.name;  
            console.log(previousversion.evolves_from_species.name);
            const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/`+previousversion.evolves_from_species.name);
            const resp3 = await resp2.json();
            let pokemonOldPic = document.getElementById("poke-old-pic");   
            pokemonOldPic.src = resp3.sprites.front_default;
            console.log(previousversion.evolution_chain.url);
            const resp4 = await fetch (`${previousversion.evolution_chain.url}`);
            const resp5 = await resp4.json();
            let evoInfo = resp5.chain;
            console.log(evoInfo);
            return evoInfo;

            
            }
             oldpokemon();
             getPokemon(pokemon_name);})

             /*
            const allPokemon=[];
            allPokemon.push([await getPokemon(resp5.chain.species.name)]);
            const firstEvo=[];
            const secondEvo=[];
            if (resp5.chain.evolves_to){
                for (let i = 0; i < resp5.chain.evolves_to.length; i++){
                    const evo1 = await getPokemon(resp5.chain.evolves_to[i].species.name);
                    firstEvo.push(evo1);
                    if(resp5.chain.evolves_to[i].evolves_to){
                        for (let j = 0; j < resp5.chain.evolves_to[i].evolves_to[j]; j++){
                             const evo2 = await getPokemon(resp5.chain.evolves_to[i].evolves_to[j].species.name);
                        secondEvo.push(evo2);
                        }
                    }
                }
            }
            allPokemon.push(firstEvo);
            allPokemon.push(secondEvo);
           
            let evos = document.getElementById("evo");
            evos.innerText = allPokemon;*/
        /*  
        async function getPokemons(){
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/`+pokemon_name);
            const pokemon = await data.json();
            return pokemon;

        }
       
        async function getSpecies(pokemon){
            const data=await fetch(pokemon.species.url);
            const speciesData=await data.json();
            return speciesData;}

        async function getEvolutions(pokemon){
            const data = await fetch(pokemon.species.url);
            const speciesData = await data.json(); 
        }*/
              
        
        
        async function getAllPokemon(){
            const pokemons=await oldpokemon(pokemon_name);
            console.log(pokemons);
            const speciesData=await getSpecies(pokemon);
            const resp5=await getEvolutions(speciesData);
            const allPokemon=[];
            allPokemon.push([await getPokemon(resp5.chain.species.name)]);
            const firstEvo=[];
            const secondEvo=[];
            if (resp5.chain.evolves_to){
                for (let i = 0; i < resp5.chain.evolves_to.length; i++){
                    const evo1 = await getPokemon(resp5.chain.evolves_to[i].species.name);
                    firstEvo.push(evo1);
                    if(resp5.chain.evolves_to[i].evolves_to){
                        for (let j = 0; j < resp5.chain.evolves_to[i].evolves_to[j]; j++){
                             const evo2 = await getPokemon(resp5.chain.evolves_to[i].evolves_to[j].species.name);
                        secondEvo.push(evo2);
                        }
                    }
                }
            }
            allPokemon.push(firstEvo);
            allPokemon.push(secondEvo);
            console.log(allPokemon);
            let evos = document.getElementById("evo");
            evos.innerText = allPokemon;
            return allPokemon;
            };
            getAllPokemon();
            async function doThings(){
                const pokemon=await getPokemons(pokemon_name);
                const speciesData=await getSpecies(pokemon);
                console.log(pokemon);
                console.log(speciesData);
            }
            getPokemon(pokemon_name);
       
       