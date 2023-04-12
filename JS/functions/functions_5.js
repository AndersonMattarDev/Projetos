//Function scope
let subject = 'create video'
/*no caso de variaveis com o mesmo nome dentro do scopo da função 
e fora se nao passar como parametro na função ex.(subject) a variavel que esta fora 
do escopo da função vai ser sobrescrita
*/
function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))