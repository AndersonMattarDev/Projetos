const people = ['Anderson', 'Lidiane', 'Lucas','André']
const upperCasePeopleThatStartsWithL = people
.filter(person => person.startsWith('L'))
.map(dperson => dperson.toUpperCase())
console.log(upperCasePeopleThatStartsWithL)