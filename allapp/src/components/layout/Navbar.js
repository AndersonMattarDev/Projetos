import { Link } from 'react-router-dom'
import logo from './img/logo.png'
import styles from './styles/Navbar.module.css'

function Navbar() {
       return(
        <nav className={styles.navbar}>
        <Link to="/">
              <img src={logo} alt="alltech" className={styles.img} />
        </Link>
        <ul className={styles.list}>
            <li className={styles.item}><Link to="/">Home</Link></li>
            <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
            <li className={styles.item}><Link to="/contato">Contato</Link></li>
            <li className={styles.item}><Link to="/lojas">Lojas</Link></li>
        </ul>
        </nav>
       )
}

export default Navbar;