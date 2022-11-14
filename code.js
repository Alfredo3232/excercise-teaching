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
    console.log(pokemon1, " VS ", pokemon2)
    
}


battle(pikachu, bulbasaur)