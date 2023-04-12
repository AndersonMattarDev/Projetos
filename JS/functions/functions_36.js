//if...else

let temperature = 37.4
//Uma dia seria criar variaveis com os parametros desejados como condicionais em if e else
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37  

if(highTemperature){
    console.log('Febre Alta!')
} else if(mediumTemperature) {
    console.log('Febre moderada!')
}else {
    console.log('Sem Febre')
}