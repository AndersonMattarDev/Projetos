//usando o recurso Structure
import './Card.css'

function Card({nome, idade, profissao, foto}){
    return(
        <div className='card-todo'>
            <img src={foto} alt={nome} className='card-img'/>
            <h1>Nome: {nome}</h1>
            <h2>Idade: {idade}</h2>
            <h2>Profissão: {profissao}</h2>
        </div>
    )
}

export default Card