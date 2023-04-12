// throw (Significa disparar ou lançar em inglês)

function sayMyName(name = ''){
    if( name === ''){
        throw 'nome é necessário'
    }
    console.log('depois do erro')
    }

// try(Tentar em inglês)...catch (Pegar em inglês) 

try{
    sayMyName('')

}catch(e){
    console.log(e)
}
console.log('Após a função de erro')
// throw e try...catch são usados para capturar erros em aplicações