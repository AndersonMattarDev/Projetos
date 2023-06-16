import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './styles/LinkButton.module.css'

function LinkButton({to, text}) {
    return(
        //para usar futuramente de acordo com o projeto ou necessidade
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default LinkButton;