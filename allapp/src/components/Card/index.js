import React from 'react';
import styles from './Card.module.css';
import imagem from '../layout/img/artesanatoLogo.jpeg';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Card() {
  return (
    <section className={styles.card}>
     
      <Link to="/artesanato">
        <img src={imagem} alt="logo" className={styles.image} />     
      </Link>
     
    </section>
  );
}

export default Card;
