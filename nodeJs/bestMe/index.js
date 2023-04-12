//essa e a parte da saida
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + ">")
}
//assim o processo fica a espera de dados e toda ves que der enter,  
//ele confere se tem dados e os imprime se não houver ele deixa em branco
ask()
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    }else{
     console.log(answers)   
     process.exit() //Esse comando encerra o processo 
    }
})

process.on('exit', () =>{
    console.log(`
    Bacana Anderson!,
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborrceu e poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou feliz hoje foi:
    ${answers[2]}
    
    Você ajudou ${answers[3]} pessoas hoje:
    
    Volte amanhã para novas reflexões!!!
    
    `)
})