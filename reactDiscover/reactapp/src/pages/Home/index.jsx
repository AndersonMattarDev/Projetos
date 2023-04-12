import React, { useState } from 'react'; //Importando estado do react

import './style.css'
import { Card } from '../../components/Card'

export function Home() {
  

  const [studentName, setStudentName] = useState(''); //Criando um estado

  
  return (
    //<></> Essas tags de abertura e fechamento são necessarias para embrulhar os elementos pois o jsx nao aceita mais de um elemento
    // <div><div/> Ou poderia embrulhar em uma div
    <div className="container"> 
   <h1>Nome: {studentName}</h1>
   <input 
   type="text" 
   placeholder="Digite o Nome..."
   onChange={e => setStudentName(e.target.value)}
   />
   <button type="button">Adicionar</button>

   <Card name="Anderson" time="10:54:15"/>
   <Card name="Lucas" time="11:45:25"/>
   <Card name="Lidiane" time="10:59:36"/>
   </div>
  )
}


