import styles from './cardToday.module.scss'
import { FaCheck } from 'react-icons/fa'

export function CardToday() {
    return (
        <div className={styles.cardContainer}>
            
            <div className={styles.cardContent}>
                <h1>Pizza do dia:</h1>
                <img src="/images/pizza-calabresa.jpg" alt="calabresa" />
                <span>Pizza Napolitana</span><br />
                <label>Massa: </label>
                <p>Napolitana</p>
                <label>Ingredientes: </label>
                <p>mussarela, peito de peru, palmito, parmesão, oregano</p>
                <div className={ styles.cardPrice }>
                    <span>R$ 37,00</span>
                    <button>Quero!
                        <FaCheck />
                    </button>
                </div>
            </div>
        </div>
    )
}