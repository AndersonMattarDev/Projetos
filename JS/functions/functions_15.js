//Manipulando strings e números

/*
Separe um texto que contém espaços, em um novo array
onde cada texto é uma posição do array. Depois disso,
transforme o array em um texto e onde eram espaços, coloque _
*/

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ") //tranforma e separa o string p/ array nesse caso com espaço em branco
let phraseWithUnderscore = myArray.join("_") //transforma devolta para string e coloca o que estiver como argumento como separador 
console.log(phraseWithUnderscore)


