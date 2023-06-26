import React, { useState } from 'react';
import axios from 'axios';

import Textarea from '../Form/Textarea';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import styles from './Message.module.css';

function MesageForm({btnText}){

    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/contatos', {
                nome,
                mensagem,
                email
            });

            console.log(response.data);

            
            setNome('');
            setMensagem('');
            setEmail('');
        } catch(error) {
            console.error(error);
        }
    
    } 
         return(
        <form onSubmit={handleSubmit} className={styles.form}>
            
            <Input
            type="text" 
            text= "Nome"
            name="nome" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome aqui!"
            required
            
            />

            <Textarea
            type="text" 
            text="Mensagem" 
            name="mensagem" 
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Digite sua mensagem!"
            required
           
            />

<Input
            type="email" 
            text="Contato" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail!"
            required
          
            />
            
            <SubmitButton text={btnText}  />
            
            
        </form>
    )
}

export default MesageForm;