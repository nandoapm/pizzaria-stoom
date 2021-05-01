import styles from './styles.module.scss'
import { FaPizzaSlice } from 'react-icons/fa'
import { BiBadge } from 'react-icons/bi'
import { GiFullPizza } from 'react-icons/gi'
import { UserPoints } from './UserPoints'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <FaPizzaSlice size={50} />
                <div className={styles.headerBody}>
                    <h1>PizzaStoom</h1>
                    <span>é pizza, sim.</span>
                </div>
                <UserPoints />
            </div>
        </header>
    )
}