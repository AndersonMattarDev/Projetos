import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Message.module.css';

 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4d14r6j', 'template_bz49nud', form.current, 'P67QonVJk7Y6lEdUB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <label>Nome:</label>
      <input type="text" name="name" className={styles.name}/>
      <label>Email:</label>
      <input type="email" name="email" className={styles.email}/>
      <label>Mensagem:</label>
      <textarea name="message" className={styles.txt}/>
      <input type="submit" value="Enviar" className={styles.btn}/>
    </form>
  );
};

export default ContactForm;