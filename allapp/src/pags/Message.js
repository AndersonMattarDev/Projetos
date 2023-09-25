import ContactForm from '../components/Mensagens/contactForm';
import styles from "./Message.module.css";

function Message() {

    
    return(
     <div className={styles.contact_container}>
        <h1 className={styles.titulo}>Envie uma mensagem</h1>
        <p className={styles.txt}>Sua opinião é muito importante para nós</p>
        <ContactForm btnText="Enviar contato" />

        
    </div>
    )
}

export default Message;