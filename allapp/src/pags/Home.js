import imagem from '../components/layout/img/imgHome.jpg'
import imagem_2 from '../components/layout/img/sistema-html-para-o-conceito-de-sites.jpg'
import imagem_3 from '../components/layout/img/logo social midea.jpg'
import imagem_4 from '../components/layout/img/logo mkt.jpg'
import styles from './Home.module.css';

function Home() {
    return (

        <section className={styles.home_container}>
            <h1>Alltech <span>Soluções em Tecnologia</span></h1>
            <div className={styles.live}></div>
            <p>Precisa de uma solução para seu negocio? Você está no lugar certo!</p>

            <ul>
                <li className={styles.image_item}>
                    <img src={imagem_2} alt="imagem" />
                    <span>Desenvolvimento de sistemas web!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_3} alt="imagem" />
                    <span>Estratégias de marketing para redes sociais!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem_4} alt="imagem" />
                    <span>Soluções em Marketing digital!</span>
                </li>

                <li className={styles.image_item}>
                    <img src={imagem} alt="imagem" />
                    <span>Soluções sob medida para MEI!</span>
                </li>
            </ul>


        </section>





    )
};

export default Home;