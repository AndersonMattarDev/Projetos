import styles from './styles/Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return(
    <div className={styles.FooterWrapper}>
      <footer className={styles.Footer}>
      <ul>
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
      <p><span>Powered by AllTech-Anderson Mattar</span> &copy; 2023</p>
    </footer>
    </div>
    
  )
};

export default Footer;