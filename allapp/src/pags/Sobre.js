import styles from './Sobre.module.css';
import imagem from '../components/layout/img/fotoAnd.jpeg'
import imagem2 from '../components/layout/img/logoAlltech.jpeg'

function Sobre() {
    return (
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
                        Hoje posso me considerar um desenvolvedor front-end, com muito ainda por aprender,
                        mas foco e determinação não me faltam.
                        Agora começo uma nova jornada rumo ao Fullstack, e se Deus quiser em breve estarei
                        trabalhando com o que mais gosto.... Programação!!!
                    </p>
                </span>


            </section>

            <h1>Sobre a ALLTech</h1>

            <section className={styles.image_item}>
                <img src={imagem2} alt="foto" />
                <span className={styles.quebra_linha}>
                ALLtech, começou como um sonho em um momento muito difícil, 
                onde eu precisava decidir seguir em frente e me reinventar ou,
                parar e desistir. Então pensei.... 
                O que fazer para aproveitar o tempo difícil que vou enfrentar e não o perder?
                Então resolvi correr atrás de um sonho antigo, me tornar programador,
                e comecei a estudar, sem dinheiro e com tempo escasso, 
                precisei ter muito foco e disciplina para conciliar o curso superior de 
                tecnologia em empreendedorismo com todo curso de programação e 
                desenvolvimento web que eu encontrava disponível, e este site é fruto desse esforço. 
                ALL é a Junção da letra inicial do meu nome Anderson e das iniciais dos 
                nomes das pessoas mais importantes da minha vida, Lidiane minha amada esposa e 
                Lucas meu filho querido, e não por acaso ALL em inglês significa TUDO.  
                    <br />
                    <p className={styles.quebra_linha}>
                    ALLtech foi idealizada para ser uma empresa criadora de soluções
                    digitais, softwares, games, Sistemas e aplicações web etc., 
                    estamos apenas no início, um pequeno embrião e sei que para 
                    chegar onde eu sonho estar daqui alguns anos, será necessário muito 
                    estudo e trabalho ainda, porém com ajuda de Deus e o apoio da minha 
                    família sei que em breve a ALLtech estará não somente vendendo 
                    soluções mas, sim construindo um futuro grandioso com os 
                    colaboradores e parceiros que estiverem junto conosco nesse 
                    sonho ao se tornar realidade! E o ponto de partida é agora 
                    rumo ao Infinito e Além.... Espero vocês lá! 
                    </p>
                </span>


            </section>

        </div>

    )
};

export default Sobre;