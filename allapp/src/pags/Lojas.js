import styles from './Lojas.module.css';
import Card from '../components/Card/index'

function Lojas() {
    return(
        <div className={styles.conteudo}>
            <section className={styles.titulo}>
            <h1>Sejam Bem Vindos</h1>
            </section>
           
           <section className={styles.cards}>
            <Card />
            </section>
        </div>

    )
};

export default Lojas;