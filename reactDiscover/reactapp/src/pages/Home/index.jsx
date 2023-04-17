import React, { useState } from 'react'; //Importando estado do react

import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState(''); //Criando um estado
  const [students, setStudents] = useState([])

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


  
  return (
    //<></> Essas tags de abertura e fechamento são necessarias para embrulhar os elementos pois o jsx nao aceita mais de um elemento
    // <div><div/> Ou poderia embrulhar em uma div
    <div className="container"> 
   <header>
   <h1>Lista de Presença</h1>
   <div>
    <strong>Anderson Mattar</strong>
    <img src="https://avatars.githubusercontent.com/u/119048066?s=96&v=4"  alt="" />
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


