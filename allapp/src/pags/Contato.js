import styles from './Contato.module.css';

function Contato() {
    return(
        <div className={styles.conteudo}>
            <h1>Contato</h1>
            <a href="mailto:andmat7745@gmail.com" className={styles.mail}>E-mail: andmat7745@gmail.com</a>
            <a href="https://github.com/AndersonMattarDev" className={styles.link}><strong>Github:</strong> github.com/AndersonMattarDev</a>
            <a href="tel:+032984638048" className={styles.fone}>Fone: 032984638048</a>
        </div>

    )
};

export default Contato;