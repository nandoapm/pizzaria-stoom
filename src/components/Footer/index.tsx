import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <span>&copy; 2021 Copyright - Fernando Melo</span>
                <button onClick={() => window.location.href = "https://github.com/nandoapm/pizzaria-stoom"}>
                    <FaGithub />
                </button>
            </div>
        </footer>
    )
}