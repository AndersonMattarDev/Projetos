import styles from './styles/Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return(
    <footer className={styles.Footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}><span>Powered by AllTech-Anderson Mattar</span> &copy; 2023</p>
    </footer>
  )
};

export default Footer;