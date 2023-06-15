import imagem from '../layout/img/imgHome.jpg'
import styles from './Home.module.css';

function Home() {
    return(
        <div className={styles.conteudo}>
            <h1>Home</h1>
            <div>
                <img src={imagem} alt="imagem" />
            </div>
            <p>Conteúdo</p>
        </div>

    )
};

export default Home;