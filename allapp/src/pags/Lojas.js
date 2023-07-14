import styles from './Lojas.module.css';
import imagem from '../components/layout/img/em_construcao.jpg'

function Lojas() {
    return(
        <div className={styles.conteudo}>
            <h1>Lojas</h1>
            <img src={imagem} alt='em construção' />
        </div>

    )
};

export default Lojas;