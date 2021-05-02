import styles from '../screen.module.scss'

export function Flavor() {
    return (
        <section className={styles.screenContent}>
            <div className={styles.cardFlavor}>
                <div>
                    <h1>Sabores dísponiveis:</h1>
                    <select>
                        <option>Calabresa</option>
                        <option>Chocolate</option>
                        <option>Frango</option>
                        <option>Italiana</option>
                        <option>Queijo</option>
                        <option>Portuguesa</option>
                    </select>
                </div>
                <div>
                    <h1>Segundo Sabor:</h1>
                    <select>
                        <option>Calabresa</option>
                        <option>Chocolate</option>
                        <option>Frango</option>
                        <option>Italiana</option>
                        <option>Queijo</option>
                        <option>Portuguesa</option>
                    </select>
                </div>
                <div>
                    <h1>Terceiro Sabor:</h1>
                    <select>
                        <option>Calabresa</option>
                        <option>Chocolate</option>
                        <option>Frango</option>
                        <option>Italiana</option>
                        <option>Queijo</option>
                        <option>Portuguesa</option>
                    </select>
                </div>
                
            </div>
        </section>
    )
}