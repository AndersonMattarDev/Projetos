import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Message.module.css';

 const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4d14r6j', 'template_bz49nud', form.current, 'P67QonVJk7Y6lEdUB')
      .then((result) => {
          setMessage('Mensagem enviada com sucesso!');
          resetForm();
          setTimeout(() => {
            setMessage(null);
          }, 5000); //Define o tempo de 5 segundos para a mensagem desaparecer
          console.log(result);
      }, (error) => {
        setMessage('Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde!')
          console.error(error);
      });
  };

  const resetForm = () => {
    //Define que o formulario volte a ficar em branco
    form.current.reset();
  }

  return (
    <div>
      {message && <p className={styles.message}>{message}</p>}
      <form ref={form} onSubmit={sendEmail} className={styles.form}> 
      <label>Nome:</label>
      <input type="text" name="name" className={styles.name}/>
      <label>Email:</label>
      <input type="email" name="email" className={styles.email}/>
      <label>Mensagem:</label>
      <textarea name="message" className={styles.txt}/>
      <input type="submit" value="Enviar" className={styles.btn}/>
    </form>
    </div>
  );
};

export default ContactForm;