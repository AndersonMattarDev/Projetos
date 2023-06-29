import styles from './Sobre.module.css';
import imagem from '../components/layout/img/fotoeuele.jpg'

function Sobre() {
    return(
        <div className={styles.conteudo}>

            <h1>Sobre o Desenvolvedor</h1>

            <section className={styles.image_item}>
                <img src={imagem} alt="foto" />
                <span className={styles.quebra_linha}>
                     Site criado por Anderson Moreno Mattar, 
                     como primeiro projeto de desenvolvimento de sistemas web,
                </span>
            </section>

        </div>

    )
};

export default Sobre;