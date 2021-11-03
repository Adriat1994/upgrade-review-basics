let arrayTextos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(array, text) {
    return array.indexOf(text)
}


console.log(findArrayIndex(arrayTextos, "Caracol"));
console.log(findArrayIndex(arrayTextos, "Mosquito"));
console.log(findArrayIndex(arrayTextos, "Salamandra"));
console.log(findArrayIndex(arrayTextos, "Ajolote"));
