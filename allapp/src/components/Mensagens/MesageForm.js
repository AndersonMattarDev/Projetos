import Textarea from '../Form/Textarea';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import styles from './Message.module.css';

function MesageForm({btnText}){

      return(
        <form className={styles.form}>
            
            <Input
            type="text" 
            text="Nome" 
            name="nome" 
            placeholder="Digite seu nome aqui!"
            required
            />

            <Textarea
            type="text" 
            text="Mensagem" 
            name="nome" 
            placeholder="Digite sua mensagem!"
            required
            />

<Input
            type="email" 
            text="Contato" 
            name="nome" 
            placeholder="Digite seu e-mail!"
            required
            />
            
            <SubmitButton text={btnText}  />
            
            
        </form>
    )
}

export default MesageForm;