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

let valoresVolume = [];

for (let usuario of users) {    //Hacemos un bucle for of para extraer cada usuario dentro de users. Usuario seria name y todo lo que incluye.

    let favoritesSounds = usuario.favoritesSounds;      //declaramos esta variable para que el codigo sea más sencillo 

    for (let sonidos in favoritesSounds) {          //Hacemos un bucle for in para extraer las propiedades del objeto favoritesSounds. Sonidos sería cada sonido "shower", "train", etc.
        
        valoresVolume.push(favoritesSounds[sonidos].volume);        //Hacemos un push de la propiedad volume que es la que nos interesa
    }
}

let sum = valoresVolume.reduce((previous, current) => current += previous);     //Hacemos suma de todos los valores y sacamos la media
let avg = sum / valoresVolume.length;

console.log(avg);