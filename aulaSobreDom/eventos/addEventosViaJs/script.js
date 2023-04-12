// Eventos via JS método 1 maneira mais recomendada


const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
       console.log('print')
}

h1.addEventListener('click', function(){
       console.log('Outro Momento')
}) // Assim se pode adicionar outra funcionalidade

// Eventos via JS método 2 não é recomendada por que se precisar adicionar outra funcionalidade a que vai valer é a última

//const h1 = document.querySelector('h1')

//h1.onclick = print

//function print() {
  //     console.log('print')
//}