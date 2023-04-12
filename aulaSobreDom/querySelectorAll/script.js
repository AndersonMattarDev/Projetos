//querySelectorAll()

const elements = document.querySelectorAll('.one')


elements.forEach(el => console.log(el))

// qual usar

//getElementsById (Retorna um element direto)
//getElementsByClassName (O retorno é um HTMLcolection) nesse não da pra fazer um foreach
//getElementsByTagName (O retorno é um HTMLcolection)
//querySelector (Retorna um element direto)
//querySelectorAll (O retorno é um node list) nesse da pra fazer um foreach


