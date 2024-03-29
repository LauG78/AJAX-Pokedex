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
            let pokemonOldPic = document.getElementById("poke-old-pic"); 
            let pokemonSpecie = document.getElementById("pokemon's-evolvs") 
            if (previousversion.evolves_from_species){           
                pokemonSpecie.innerHTML = previousversion.name+" evolved from: "+previousversion.evolves_from_species.name;  
                console.log(previousversion.evolves_from_species.name);
                const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/`+previousversion.evolves_from_species.name);
                const resp3 = await resp2.json();
                pokemonOldPic.src = resp3.sprites.front_default;
            }
            else {
                pokemonSpecie.innerHTML = "This species did not evolved";
                pokeOldImg.src = "";
            }
            console.log(previousversion.evolution_chain.url);
            const resp4 = await fetch (`${previousversion.evolution_chain.url}`);
            const resp5 = await resp4.json();
            console.log(resp5);
                   
            
            function evol () {
                
                if (resp5.chain.evolves_to[0]){
                    let evolvesTo1 = "Evolution: "+resp5.chain.evolves_to[0].species.name;
                    document.getElementById("evo1").innerHTML = evolvesTo1}
                else {
                    document.getElementById("evo1").innerHTML = "";
                }
                if (resp5.chain.evolves_to[1]){
                let evolvesTo2 = "Evolution: "+resp5.chain.evolves_to[1].species.name;
                document.getElementById("evo2").innerHTML = evolvesTo2;}
                else{
                    document.getElementById("evo2").innerHTML = ""
                }
                if (resp5.chain.evolves_to[2]){
                let evolvesTo3 = "Evolution: "+resp5.chain.evolves_to[2].species.name;
                document.getElementById("evo3").innerHTML = evolvesTo3;
                }
                else{
                    document.getElementById("evo3").innerHTML = ""
                }
            
        }
            evol();
        }
            oldpokemon();
            getPokemon(pokemon_name);  
})      