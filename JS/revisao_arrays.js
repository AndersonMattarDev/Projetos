// revisão sobre arrays
/*
const animals = [
    'Lion',
    'Monkey',
    'Cat'
]
*/

//Posso também criar uma objeto dentro do array e acessar seu valor
//Porém não é comum o seu uso pois misturar esses dados pode gerar bugs
//console.log(animals[1].name) por exemplo desta forma o valor impresso será undefined pois Leão e Macaco nao tem name definido
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: '5'
    }
]


//Como acessar valoresa dentro do array?

console.log(animals[2].name)

