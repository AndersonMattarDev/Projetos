import React from 'react';
import { FaWhatsapp, FaRegHandPointRight } from 'react-icons/fa';
import styles from './Artesanato.module.css';
import imagem1 from './Tapetes/auto_relevo.jpeg';
import imagem2 from './Tapetes/centro_de_mesa.jpeg';
import imagem3 from './Tapetes/centro_mesa_beje.jpeg';
import imagem4 from './Tapetes/quadrado_renda.jpeg';
import imagem5 from './Tapetes/tapete_estrela beje grd.jpeg';
import imagem6 from './Tapetes/tapete_estrela beje peq.jpeg';
import imagem7 from './Tapetes/tapete_estrela grd.jpeg';
import imagem8 from './Tapetes/tapete_estrela peq.jpeg';



function Artesanato () {
    return(
        <section className={styles.container}>
            <h1> <span>< FaRegHandPointRight/></span> Faça seu pedido </h1>
            <p><span> <FaWhatsapp /></span> 032 98463-8048</p>
           <ArtesanatoCard image={imagem1} title="Tapete Crochê Auto Relevo" price="R$ 120,00" />
           <ArtesanatoCard image={imagem2} title="Centro Flor Rosa" price="R$ 30,00" />
           <ArtesanatoCard image={imagem3} title="Centro de Mesa Beje" price="R$ 30,00" />
           <ArtesanatoCard image={imagem4} title="Retangulo Renda" price="R$ 80,00" />
           <ArtesanatoCard image={imagem5} title="Estrela Marrom Grande" price="R$ 80,00" />
           <ArtesanatoCard image={imagem6} title="Estrela Marraom Pequeno" price="R$ 30,00" />
           <ArtesanatoCard image={imagem7} title="Estrela Bege Grande" price="R$ 80,00" />
           <ArtesanatoCard image={imagem8} title="Estrela Bege Pequeno" price="R$ 30,00" />
        </section>
    )
}

function ArtesanatoCard({ image, title, price}) {
    return(
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <span>{price}</span>
        </div>
    )
}

export default Artesanato;

