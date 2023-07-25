import React from 'react';
import styles from './cardCida.module.css';
import imagem from '../layout/img/arteLucas02.jpeg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function CardCida() {
  return (
    <section className={styles.card}>
     
      <Link to="/deliciascida">
        <img src={imagem} alt="logo" className={styles.image} />     
      </Link>
     
    </section>
  );
}

export default CardCida;