import imagem from '../layout/img/imgHome.jpg'
import imagem2 from '../layout/img/sistema-html-para-o-conceito-de-sites.jpg'
import styles from './Home.module.css';

function Home() { 
    return (
        
            <section className={styles.home_container}>
            <h1>Alltech-Site <span> Portfólio</span></h1>
                <p>Site criado por Anderson Moreno Mattar, com ReacJs para servir de portfólio,
                    e mostrar habilidade em desenvolvimento web!
                </p>
                <div>
                <img src={imagem} alt="imagem" />
                <img src={imagem2} alt="imagem" />
            </div>            
            </section>
            
            

        

    )
};

export default Home;