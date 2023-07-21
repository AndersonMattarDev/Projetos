import React from 'react';
import styles from './Artesanato.module.css';
import imagem1 from './Tapetes/auto_relevo.jpeg'


function Artesanato () {
    return(
        <section className={styles.container}>
           <div className={styles.card}>
            <img src={imagem1} alt="Auto Relevo" />
            <h3>Tapete Crochê Auto Relevo</h3>
            <span>Preço: RS 100,00</span>
           </div>
        </section>
        
    )
}

export default Artesanato;

