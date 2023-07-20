import styles from './Lojas.module.css';
import Card from '../components/Card/index'

function Lojas() {
    return(
        <div className={styles.conteudo}>
            <section className={styles.titulo}>
            <p className={styles.typingAnimation}>Mostre seus produtos aqui, e faça bons negócios! </p>
            </section>
           
           <section className={styles.cards}>
            <Card />
            <Card />
            </section>
        </div>

    )
};

export default Lojas;