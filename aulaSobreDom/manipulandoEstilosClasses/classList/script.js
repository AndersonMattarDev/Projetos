// Alterando Estilos
// Class List

const element = document.querySelector('body')
element.classList.add('active', 'green')
element.classList.remove('active')
element.classList.toggle('active') //se a classe existir ele tira se nao existir ele adiciona


console.log(element.classList)
