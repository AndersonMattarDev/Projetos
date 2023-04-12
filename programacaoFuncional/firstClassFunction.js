const sayMyName = () => console.log('Anderson')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Mattar'))
console.log(runFunction(Math.random))