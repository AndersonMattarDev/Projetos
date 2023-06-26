import MesageForm from '../Mensagens/MesageForm';
import styles from "./Message.module.css";

function Message() {

    
    return(
     <div className={styles.contact_container}>
        <h1>Envie uma mensagem</h1>
        <p>Sua opinião é muito importante para nós</p>
        <MesageForm btnText="Enviar contato" />
     </div>
    )
}

export default Message;