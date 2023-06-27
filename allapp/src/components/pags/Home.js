import imagem from '../layout/img/imgHome.jpg'
import imagem2 from '../layout/img/sistema-html-para-o-conceito-de-sites.jpg'
import styles from './Home.module.css';

function Home() { 
    return (
        
            <section className={styles.home_container}>
            <h1>Alltech-Site <span> Portfólio</span></h1>
                <p>Precisa de uma solução para seu negocio? Você está no lugar certo!</p>
                <div>
                    <ul>
                        <li><img src={imagem} alt="imagem" /></li>
                        <li><img src={imagem2} alt="imagem" /></li>
                    </ul>
                
            </div>            
            </section>
            
            

        

    )
};

export default Home;