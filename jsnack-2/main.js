console.log("hello");


/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/


const names = ['pippo', 'PLUTO', 'Paperino']

console.log(names);

//console.log(nomi[0][0]);

const minuscolo = names.map(element => {
    const lowerCase = element.toLowerCase()
    element[0]
    const firstChar = lowerCase.charAt(0).toUpperCase()
    console.log(firstChar);
    const wordSlice = lowerCase.slice(1)
    console.log(wordSlice);

    const nuovaParola = firstChar + wordSlice

    return nuovaParola
})

console.log(minuscolo);






