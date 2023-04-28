import { useState, useEffect } from 'react'; //Importando estado do react

import './style.css'
//abaixo a importação do componente tipado CardProps
import { Card, CardProps } from '../../components/Card'

type Profileresponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState(''); //Criando um estado
  const [students, setStudents] = useState<CardProps[]>([]);//uso do tipo importado CardProps e como ele afeta mais de um elemento usa o colchete
    const [user, setUser] = useState<User>({} as User);

  function handleAddStudent(){
    const newStudent = {
    name: studentName,
    time: new Date().toLocaleDateString("pt-br", {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    })
    };

    setStudents(prevState => [...prevState, newStudent]);
}
//Corpo do useEffect
/*useEffect(() => {
fetch('https://api.github.com/users/Andersonmattardev') //consumindo api com useEffect
.then(response => response.json())
.then(data => {
setUser({
  name: data.name,
  avatar: data.avatar_url,

})
})
} , [students]); */

// usando async no useEffect não dá para usar direto, procisa criar a função
useEffect(() =>{
  async function fetchData() {
    const response = await fetch('https://api.github.com/users/Andersonmattardev')
    const data = await response.json() as Profileresponse;
    
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    });
  }

  fetchData();

}, []);
  
  return (
    //<></> Essas tags de abertura e fechamento são necessarias para embrulhar os elementos pois o jsx nao aceita mais de um elemento
    // <div><div/> Ou poderia embrulhar em uma div
    <div className="container"> 
   <header>
   <h1>Lista de Presença</h1>
   <div>
    <strong>{user.name}</strong>
    <img src= {user.avatar}  alt="" />
   </div>
   </header>
   
   <input 
   type="text" 
   placeholder="Digite o Nome..."
   onChange={e => setStudentName(e.target.value)}
   />
   <button type="button" onClick={handleAddStudent}>
    Adicionar
    </button>

   { 
   students.map(student => (
    <Card
    key={student.time} // Esse tipo de componente precisa de uma key que precisa ser unica
     name={student.name} 
     time={student.time}
     />
   ))
   
   }
   </div>
  )
}


