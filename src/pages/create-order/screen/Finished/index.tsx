import styles from '../screen.module.scss'

export function Finished() {
    return (
        <section className={styles.screenContent}>
            <div className={styles.cardFinished}>
                <div>
                    <h1>Adicionais</h1>
                    <select>
                        <option>Queijo +</option>
                        <option>Cebola +</option>
                        <option>Frango +</option>
                        <option>cheddar +</option>
                        <option>Catupiry +</option>
                    </select>
                </div>
                <div>
                    <h1>bebidas :</h1>
                    <select>
                        <option>Refrigerante</option>
                        <option>Suco</option>
                    </select>
                </div>
            </div>
        </section>
    )
}