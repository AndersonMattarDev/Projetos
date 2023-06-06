import './styles/Contato.css';

function Contato() {
    return(
        <div className='conteudo'>
            <h1>Contato</h1>
            <a href="mailto:andmat7745@gmail.com" className="mail">E-mail: andmat7745@gmail.com</a>
            <a href="https://github.com/AndersonMattarDev" className='link'><strong>Github:</strong> github.com/AndersonMattarDev</a>
            <a href="tel:+032984638048">Fone: 032984638048</a>
        </div>

    )
}

export default Contato;