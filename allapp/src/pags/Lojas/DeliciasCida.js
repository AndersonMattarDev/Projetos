import React from 'react';
import { FaWhatsapp, FaRegHandPointRight } from 'react-icons/fa';
import styles from './Delicias.module.css'
import imagem1 from './Delicias_Cida/WhatsApp Image 2023-07-24 at 09.01.27 (1).jpeg'


function Delicias () {
    return(
        <section className={styles.container}>
            <h1> <span>< FaRegHandPointRight/></span> Delicias da Cida - Faça sua encomenda!</h1>
            <p><span> <FaWhatsapp /></span> 032 98463-8048</p>
           <DeliciasCard image={imagem1} title="Kits com salgados variados/100 unidades" price="R$ 55,00" />
           
        </section>
    )
}

function DeliciasCard({ image, title, price}) {
    return(
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <span>{price}</span>
        </div>
    )
}

export default Delicias;