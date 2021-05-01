import { GiFullPizza } from 'react-icons/gi'
import styles from './styles.module.scss'
export function UserPoints() {
    return (
        <section className={styles.userPoints}>
            <GiFullPizza />
            <div className={styles.userPointsContent}>
                <p>StoomPoints</p>
                <span><strong>0</strong>&nbsp;pontos.</span>
            </div>
        </section>
    )
}