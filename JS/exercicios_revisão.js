//1.Declare uma variavel de nome weigth
//Em Javascript podemos terninar a declaração usando ponto e virgula;
//let weigth;

//Que tipo de dado é a variável acima? A resposta é undefined
//console.log(typeof weigth)

/* 3.Declare uma variavel e atribua valores para cada um
dos dados:
 name: String
 age: Number (Integer)
 stars: Number (Float)
 isSubscribed: Boolean 
*/
/*
let name = 'Anderson'
let age = 45
let stars = 5.8
let isSubscribed = true
*/

/* 4.A variavel abaixo é de que tipo de dado?
R: Object
4.1 Atribua a ela a mesma propriedade e valores do exercicio 3!

4.2 Mostre no console a seguinte mensagem:
<name> de idade <age> pesa <weigth> Kg.
Atenção, substitua <name> <age> e <weigth> pelos 
valores de cada proriedade do objeto
*/

let student= {
    name: "Anderson",
    age: 45,
    stars: 9.9,
    isSubscribed: true,
    weigth: 99,
    }

    //console.log(`${student.name} tem ${student.age} de idade, e pesa ${student.weigth} Kg.`)

/* 5.Declare uma variavel do tipo array e atribua a ela nenhum valor, ou seja,
somente o array vazio */

let students = []


/* 6.Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4.
(nao copiar e colar dentro, mas usar o objeto criado e inserir ele no Array)*/

students = [
    student
]
// 7.Coloque no console o valor da posição 0 do array acima
//console.log(students[0])
// 8.Crie um novo student e coloque na posição 1 do array students

const Paulo = {
    name: "Paulo",
    age: 40,
    weigth: 85.1,
    isSubscribed: true
}
// students[1] = Paulo --> É outra forna de se colocar no posição 1
students = [
    student,
    Paulo
]
console.log(students)

/* 9.Sem rodar o código responda qual é a resposta do codigo abaixo e por que? Após sua resposta,
rode o código e veja se você acertou. 
R: Imprime undefined no console porque mesmo com o hoisting levando a variavel (a) para sima do console.log
o valor dela não é levado jundo.
console.log(a)
var a = 1
*/

console.log(a)
var a = 1



