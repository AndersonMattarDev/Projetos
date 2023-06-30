import styles from './Sobre.module.css';
import imagem from '../components/layout/img/fotoeuele.jpg'
import imagem2 from '../components/layout/img/logo.png'

function Sobre() {
    return(
        <div className={styles.conteudo}>

            <h1>Sobre o Desenvolvedor</h1>

            <section className={styles.image_item}>
                <img src={imagem} alt="foto" />
                <span className={styles.quebra_linha}>
                Olá, meu nome é Anderson Moreno Mattar, sou o desenvolvedor deste site, 
                e é um enorme prazer e orgulho poder ter concluído este projeto.
                Não foi fácil, precisei estudar muito e em condições difíceis,
                precisei dividir as poucas horas que eu tinha para cursar o curso superior de
                tecnologia em empreendedorismo com cursos de desenvolvimento web,
                e muita pesquisa em tutoriais e documentações.
                     <br />
                     <p className={styles.quebra_linha}>
                     Tenho por objetivo mostrar o conhecimento que adquiri em desenvolvimento front-end com React,
                     NodeJs, CSS, JavaScript, Git e Github 
                     (na página contato tem o link do meu Github com todos os commits realizados).
                     Hoje posso me considerar um desenvolvedor front-end, com muito ainda por aprender 
                     mais foco e determinação não me faltam.
                     Agora começo uma nova jornada rumo ao Fullstack, e se Deus quiser em breve estarei 
                     trabalhando com o que mais gosto.... Programação!!!
                    </p> 
                </span>

                
            </section>

            <h1>Sobre a ALLTech</h1>

            <section className={styles.image_item}>
                <img src={imagem2} alt="foto" />
                <span className={styles.quebra_linha}>
                Texto 1
                     <br />
                     <p className={styles.quebra_linha}>
                     Texto 2
                    </p> 
                </span>

                
            </section>

        </div>

    )
};

export default Sobre;