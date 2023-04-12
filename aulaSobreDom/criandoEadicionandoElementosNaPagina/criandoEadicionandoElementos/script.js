// Criando e adicionando elementos

// Create element
const div = document.createElement('div');
div.innerText = "Olá devs !!!"

// append adiciona o item depois do primeiro filho no caso body
const body = document.querySelector('body')

body.append(div)

//prepend adiciona o item antes do primeiro filho no caso body
//body.prepend(div)