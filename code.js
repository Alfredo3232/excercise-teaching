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

    while (pokemon2.vida >= 0 && pokemon1.vida >= 0) {
        console.log(pokemon1.nombre, "va a atacar a", pokemon2.nombre)

        var pokemon1Chance = Math.round(Math.random())

        if (pokemon1Chance === 1) {
            pokemon2.vida = pokemon2.vida - pokemon1.daño

            console.log(pokemon1.nombre, "ataco a " + pokemon2.nombre)
            console.log(pokemon2.nombre, "vida ->", pokemon2.vida)
        } else {
            console.log(pokemon1.nombre, "missed")
        }

        console.log(pokemon2.nombre, "va a atacar a", pokemon1.nombre)

        var pokemon2Chance = Math.round(Math.random())

        if (pokemon2Chance === 1) {
            pokemon1.vida = pokemon1.vida - pokemon2.daño

            console.log(pokemon2.nombre, "ataco a " + pokemon1.nombre)
            console.log(pokemon1.nombre, "vida ->", pokemon1.vida)
        } else {
            console.log(pokemon2.nombre, "missed")
        }
    }

    if (pokemon1.vida < 0) {
        pokemonDerrotado(pokemon1.nombre)
    }

    if (pokemon2.vida < 0) {
        pokemonDerrotado(pokemon2.nombre)
    }
}

