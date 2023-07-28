import React from 'react';
import { FaWhatsapp, FaRegHandPointRight } from 'react-icons/fa';
import styles from './Delicias.module.css';
import imagem1 from './Delicias_Cida/Foto01.jpeg';
import imagem2 from './Delicias_Cida/Foto02.jpeg';
import imagem3 from './Delicias_Cida/Foto06.jpeg';
import imagem4 from './Delicias_Cida/Foto08.jpeg';
import imagem5 from './Delicias_Cida/Foto09.jpeg';
import imagem6 from './Delicias_Cida/Foto10.jpeg';
import imagem7 from './Delicias_Cida/Foto11.jpeg';
import imagem8 from './Delicias_Cida/bandeiras.png';


function Delicias () {
    return(
        <section className={styles.container}>
            <h1> <span>< FaRegHandPointRight/></span> Delicias da Cida - Faça sua encomenda!</h1>
            <p><span> <FaWhatsapp /></span> 11 95119-7671</p>
           <DeliciasCard image={imagem1} title="Kits salgados variados/100 unidades" price="R$ 60,00" />
           <DeliciasCard image={imagem2} title="Salgados fescos e deliciosos" price="Experimente!" />
           <DeliciasCard image={imagem3} title="Tudo feito com amor e cuidado" price="Sabor de casa!" />
           <DeliciasCard image={imagem4} title="Quibes, Coxinhas, Risoles e muito mais..." price="Impossível comer um só!!!" />
           <DeliciasCard image={imagem5} title="Coloque sabor em sua festa!!" price="Delicias da Cida! Tudo de bom!" />
           <DeliciasCard image={imagem6} title="Não perca tempo" price="Peça já!!!" />
           <DeliciasCard image={imagem7} title="Salgados sequinhos e crocantes!" price="Uma saborosa opção" />
           <DeliciasCard image={imagem8} title="Pagamento rápido e seguro!" price="aceitamos todos os cartões!" />
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