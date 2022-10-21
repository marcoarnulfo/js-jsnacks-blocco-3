console.log("hello");
/*
Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/


const cars = [
    {
        marca : 'Porsche',
        modello : '991',
        alimentazione : 'benzina'
    },
    {
        marca : 'Ferrari',
        modello : '296',
        alimentazione : 'benzina'
    },
    {
        marca : 'Audi',
        modello : 'A6',
        alimentazione : 'diesel'
    },
    {
        marca : 'BMW',
        modello : 'Serie 1',
        alimentazione : 'diesel'
    },
    {
        marca : 'Fiat',
        modello : 'Panda',
        alimentazione : 'gpl'
    },
    {
        marca : 'Opel',
        modello : 'Corsa',
        alimentazione : 'gpl'
    },
    {
        marca : 'Tesla',
        modello : 'Model X',
        alimentazione : 'elettrico'
    },
    {
        marca : 'Fiat',
        modello : '500 Elettric',
        alimentazione : 'elettrico'
    },
    {
        marca : 'Volkswagen',
        modello : 'Polo',
        alimentazione : 'metano'
    },
    {
        marca : 'Skoda',
        modello : 'Scala',
        alimentazione : 'metano'
    },
]

console.log(cars);

const benzina = cars.filter((element) => {
    if (element.alimentazione === 'benzina') {
        return true
    }
})

console.log(benzina);

const diesel = cars.filter((element) => {
    if (element.alimentazione === 'diesel' ) {
        return true
    }
})

console.log(diesel);

const unknown = cars.filter((element) => {
    if (element.alimentazione === 'gpl' || element.alimentazione === 'elettrico' || element.alimentazione === 'metano' ) {
        return true
    }
})

console.log(unknown);

