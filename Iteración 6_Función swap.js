let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function swap(array, indice1, indice2) {
    let primerNumero = [];
    let ultimoNumero = [];

    ultimoNumero.push(array.pop());           //Primero, quitamos el ultimo elemento y lo puseamos a un array vacio
    primerNumero.push(array.shift());         //Ahora quitamos el primer numero y lo puseamos al otro array vacio

    array.push(...primerNumero);              //Pusheamos el primer número al final del array
    array.unshift(...ultimoNumero);           //Pusheamos el ultimo numero al principio del array
    
    return array


}

console.log(swap(numeros, 1, 10))
