const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

let conteoWaves = 0;
let conteoRain = 0;
let conteoFirecamp = 0;
let conteoShower = 0;
let conteoTrain = 0;
let conteoWind = 0;

let conjuntoSonidos = [];

for (let usuario of users) {    //Hacemos un bucle for of para extraer cada usuario dentro de users. Usuario seria name y todo lo que incluye.

    let favoritesSounds = usuario.favoritesSounds;      //declaramos esta variable para que el codigo sea más sencillo 

    for (let sonido in favoritesSounds) {          //Hacemos un bucle for in para extraer las propiedades del objeto favoritesSounds. Sonidos sería cada sonido "shower", "train", etc.
        
        conjuntoSonidos.push(sonido);
        
        //console.log(sonido);      
    }
}

//console.log(conjuntoSonidos);

conjuntoSonidos.forEach(sonido => {
    if (sonido === "waves") {
        conteoWaves += 1;
    }
    else if (sonido === "rain") {
        conteoRain += 1;
    }
    else if (sonido === "firecamp") {
        conteoFirecamp += 1;
    }
    else if (sonido === "shower") {
        conteoShower += 1;
    }
    else if (sonido === "train") {
        conteoTrain += 1;
    }
    else if (sonido === "wind") {
        conteoWind += 1;
    }
});

console.log("El sonido waves se repite " + conteoWaves + " veces");
console.log("El sonido rain se repite " + conteoRain + " veces");
console.log("El sonido firecamp se repite " + conteoFirecamp + " veces");
console.log("El sonido shower se repite " + conteoShower + " veces");
console.log("El sonido train se repite " + conteoTrain + " veces");
console.log("El sonido wind se repite " + conteoWind + " veces");