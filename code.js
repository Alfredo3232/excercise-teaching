var bulbasaur = {
    nombre: 'bulbasaur',
    vida: 100,
    daño: 20
}

var pikachu = {
    nombre: 'pikachu',
    vida: 100,
    daño: 20
}

var charmander = {
    nombre: 'charmander',
    vida: 100,
    daño: 20
}

var squirtle = {
    nombre: 'squirtle',
    vida: 100,
    daño: 20
}

var pokemons = [squirtle, charmander, pikachu, bulbasaur]

for (let i = 0; i < pokemons.length; i++) {
    console.log("Pokemons disponibles ->", pokemons[i].nombre)
}

function pokemonDerrotado(pokemon) {
    console.log("este pokemon fue derrotado", pokemon)
}

function battle(pokemon1, pokemon2) {
    console.log(pokemon1.nombre, " VS ", pokemon2.nombre)
    
    //  while pokemon1.vida is not 0 or pokemon2.vida is not 0
    while ( pokemon2.vida >= 0) {
        // console log that pokemon1 is going to attack pokemon2
        console.log(pokemon1.nombre, "va a atacar a", pokemon2.nombre)
        // create variable pokemon1Chance that uses Math.random from 0 to 1 and round it down
        var pokemon1Chance = Math.round(Math.random())
        // if pokemon1Chance is 1
        if (pokemon1Chance === 1) {
            // pokemon2.vida - pokemon1.daño
            pokemon2.vida = pokemon2.vida  - pokemon1.daño
            // console log that pokemon1 attacked pokemon 2 and took 20 health away 
            console.log(pokemon1.nombre, "ataco a " + pokemon2.nombre)        
            console.log(pokemon2.vida)  
        }         
        //else 
        else {
            // console log that pokemon1 missed 
            console.log(pokemon1.nombre, "missed")
        }
    

        // console log that pokemon2 is going to attack pokemon1
        console.log(pokemon2.nombre, "va a atacar a", pokemon1.nombre)
        // create variable pokemon2Chance that uses Math.random from 0 to 1 and round it down
        // if pokemon2Chance is 1
            // pokemon1.vida - pokemon2.daño
            // console log that pokemon2 attacked pokemon1 and took 20 health away
        //else 
            // console log that pokemon2 missed        
    }

        
    // if pokemon1.vida is  0
    if(pokemon1.vida < 0) {
        // pokemonDerrotado(pokemon1)
        pokemonDerrotado(pokemon1.nombre)
    }

    // if pokemon2.vida is  0
    if(pokemon2.vida < 0) {
        // pokemonDerrotado(pokemon2)
        pokemonDerrotado(pokemon2.nombre)
    }
    console.log("leaving function")
}       

