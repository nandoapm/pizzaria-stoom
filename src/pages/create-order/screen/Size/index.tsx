import styles from '../screen.module.scss'

export function Size() {
    return (
        <section className={styles.screenContent}>
            <div className={styles.cardSize}>
                <div>
                    <h1>Escolha o tamanho da sua pizza:</h1>
                    <select>
                        <option>Broto | R$ 6,90 | 5 pts</option>
                        <option>Pequena | R$ 8,90 | 10 pts</option>
                        <option>Média | R$ 11,90 | 15 pts</option>
                        <option>Grande | R$ 15,90 | 20 pts</option>
                        <option>Família | R$ 19,90 | 30 pts</option>
                    </select>
                </div>
                <div>
                    <h1>Quantidade de Sabores:</h1>
                    <select>
                        <option>1 Sabores</option>
                        <option>2 Sabores</option>
                        <option>3 Sabores</option>
                        <option>4 Sabores</option>
                    </select>
                </div>
                
            </div>
        </section>
    )
}