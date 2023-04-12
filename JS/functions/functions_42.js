
// Estrutura de repetição 
// for...in  cria um loop em cima das propriedades de um objeto

let person = {
    name : 'Anderson',
    age: 45,
    weight: 97

}
for(let property in person) {
    console.log(property)//mostra a propriedade
    console.log(person[property])//uma das formas de se mostrar o dado da propriedade
}
