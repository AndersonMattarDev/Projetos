import React, { useState, useEffect } from 'react';



import Textarea from '../Form/Textarea';
import Input from '../Form/Input';
import SubmitButton from '../Form/SubmitButton';
import styles from './Message.module.css';

function MesageForm({ btnText }) {



    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           
            console.log({ nome, mensagem, email });


            setNome('');
            setMensagem('');
            setEmail('');
            setSuccessMessage('Mensagem enviada com Sucesso!');


        } catch (error) {
            console.error(error);
            setSuccessMessage('Erro ao enviar a mensagem. Por favor, tente novamente!');

        }

    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 3000); //tempo em milissegundos para a mensagem desaparecer (5 segundos

            return () => clearTimeout(timer);
        } //Limpa o timer se o componente for desmontado antes do tempo estabelecido
    }, [successMessage]);
    return (
        <form onSubmit={handleSubmit} className={styles.form} data-netlify="true">

            <Input
                type="text"
                text="Nome"
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

            <SubmitButton text={btnText} />
            {successMessage && <p> {successMessage} </p>}

        </form>
    )
}

export default MesageForm;