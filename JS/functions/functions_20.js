//Manipulando strings 

let techs = ["html", "css", "js"]

//adicionar um item no fim
techs.push('nodejs')
//adicionar um item no começo
techs.unshift('sql')
//remover um item do fim
//techs.pop()
//remover um item do começo
//techs.shift()
//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3)) //esse metodo nao modifica o array apenas retorna atraves da função, um elemento
//remover um ou mais itens em qualquer posição do array
//techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('js')
techs.splice(index, 1) //posso remover itens assim


console.log(techs)