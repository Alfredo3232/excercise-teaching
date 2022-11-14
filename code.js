var bulbasaur = {
    name: 'bulbasaur',
    health: 100,
    dmg: 20
}

var pikachu = {
    name: 'pikachu',
    health: 100,
    dmg: 20
}

var charmander = {
    name: 'charmander',
    health: 100,
    dmg: 20
}

var squirtle = {
    name: 'squirtle',
    health: 100,
    dmg: 20
}

var trainer_yourName = [squirtle, charmander, pikachu]

var trainer_Alfredo = [pikachu, bulbasaur, charmander]

function battle(trainer1, trainer2) {
    for (let poke1 = 0; poke1 < trainer1.length; poke1++) {

        var mon1 = trainer1[poke1]

        for (let poke2 = 0; poke2 < trainer2.length; poke2++) {

            var mon2 = trainer2[poke2]

            mon1.health - mon2.dmg

            
        }
    }
}

battle(trainer_yourName, trainer_Alfredo)