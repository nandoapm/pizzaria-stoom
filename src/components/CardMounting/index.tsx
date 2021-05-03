import styles from './cardMounting.module.scss'
import Link from 'next/link'
import { FaTelegramPlane } from 'react-icons/fa'

export function CardMounting() {
    const handleOrder = () => {
        window.location.href = '/create-order'
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardContent}>
                <h1>Ou monte sua pizza</h1>
                <span>Selecione sua massa:</span><br />
                <div className={styles.cardChoose}>
                    <img src="/images/pizza-calabresa.jpg" alt="calabresa" />
                    <div>
                        <label>Contrary to popular belief, Lorem Ipsum is not simply random text. </label>
                    </div>
                    <input type="radio" /* value={amount} onChange={event => setAmount(Number(event.target.value))} */ /> 
                </div>
                <div className={styles.cardChoose}>
                    <img src="/images/pizza-calabresa.jpg" alt="calabresa" />
                    <div>
                        <label>Contrary to popular belief, Lorem Ipsum is not simply random text.</label>
                    </div>
                    <input type="radio" /* value={amount} onChange={event => setAmount(Number(event.target.value))} */ /> 
                </div>
                <div className={styles.cardChoose}>
                    <img src="/images/pizza-calabresa.jpg" alt="calabresa" />
                    <div>
                        <label>Contrary to popular belief, Lorem Ipsum is not simply random text.</label>
                    </div>
                    <input type="radio" /* value={amount} onChange={event => setAmount(Number(event.target.value))} */ /> 
                </div>
                <div className={ styles.cardPrice }>
                    <button type="button" onClick={handleOrder}>Montar meu pedido
                        <FaTelegramPlane />
                    </button>
                </div>
            </div>
            <p className={styles.cardDescription}>ganhe pontos ao concluir o seu pedido<strong>*</strong></p>
        </div>
    )
}