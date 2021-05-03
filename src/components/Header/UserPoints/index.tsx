import { useEffect, useState } from 'react'
import { GiFullPizza } from 'react-icons/gi'
import styles from './styles.module.scss'
export function UserPoints() {
    const [points, setPoints] = useState("")

    useEffect(() => {
        setPoints(localStorage.getItem('points'))
        console.log(points)
    }, [points])

    return (
        <section className={styles.userPoints}>
            <GiFullPizza />
            <div className={styles.userPointsContent}>
                <p>StoomPoints</p>
                <span><strong>{points}</strong>&nbsp;pontos.</span>
            </div>
        </section>
    )
}