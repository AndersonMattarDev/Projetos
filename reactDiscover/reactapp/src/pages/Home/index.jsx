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
   <h1>Lista de Presença</h1>
   <input 
   type="text" 
   placeholder="Digite o Nome..."
   onChange={e => setStudentName(e.target.value)}
   />
   <button type="button" onClick={handleAddStudent}>
    Adicionar
    </button>

   { 
   students.map(student => <Card name={student.name} time={student.time}/>)
   
   }
   </div>
  )
}


