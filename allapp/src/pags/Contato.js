import { FaLinkedin, FaGithubAlt, FaEnvelope, FaMobileAlt, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Contato.module.css';
import LinkButton from '../components/layout/LinkButton'
import imagem from '../components/layout/img/logoAlltech.jpeg'

function Contato() {
    return (
        <div className={styles.conteudo}>

            <div className={styles.contactsContainer}>
                <div className={styles.links}>
                    <h1>Contatos</h1>
                    <a href="mailto:andmat7745@gmail.com"> <span><FaEnvelope /></span> andmat7745@gmail.com</a>
                    <a href="https://github.com/AndersonMattarDev"><span><FaGithubAlt /></span>github.com/AndersonMattarDev</a>
                    <a href="tel:+032984638048"> <span><FaMobileAlt /></span> 32-98463 8048</a>
                    <a href="https://www.linkedin.com/in/anderson-moreno-mattar-05347b257/"><span><FaLinkedin /></span>  Linkedin</a>
                    <a href="https://www.facebook.com/profile.php?id=100088499396412"><span><FaFacebook /></span>  Facebook</a>
                    <a href="https://www.instagram.com/mattarandersonmoreno/"><span><FaInstagram /></span>Instagram</a>


                    <LinkButton to="/message" text="Enviar Mensagem" />
                </div>
                
                <div className={styles.imageContainer}>
                    <img src={imagem} alt="logo" />
                </div>
            </div>
        </div>
    )
};

export default Contato;