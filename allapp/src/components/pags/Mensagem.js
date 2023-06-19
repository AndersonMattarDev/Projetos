import MesageForm from '../../components/Mensagens/MesageForm'
import styles from "./Mensagem.module.css"

function Contact(){
    return(
     <div className={styles.contact_container}>
        <h1>Envie uma mensagem</h1>
        <p>Sua opinião é muito importante para nós</p>
        <MesageForm />
     </div>
    )
}

export default Contact;