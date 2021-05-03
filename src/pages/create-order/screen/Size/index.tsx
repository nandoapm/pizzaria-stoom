import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../screen.module.scss'

export function Size(props) {
    const [step, setStep] = useState(2)
    const [products, setProducts] = useState({
		size: "",
		quantity: "",
	})
    
    const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setProducts(prevState => ({
			...prevState,
			[name]: value
		}))
	}

    const handleSize = () => {
        props.getProducts(step, products)
    }
    
    return (
        <>
        <section className={styles.screenContent}>
            <div className={styles.sideLeft}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Escolha o tamanho da sua pizza:</h1>
                        <select id="size" name="size" value={products.size} onChange={handleChange}>
                            <option>Selecione o tamanho</option>
                            {props.products.map((item, i) =>
                                <option key={i} value={item.type}>{ item.type } | R${item.price} | {item.points}pts</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.sideRight}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Quantidade de Sabores:</h1>
                        <select id="quantity" name="quantity" value={products.quantity} onChange={handleChange}>
                            <option value={1}>1 Sabor</option>
                            <option value={2}>2 Sabores</option>
                            <option value={3}>3 Sabores</option>
                            <option value={4}>4 Sabores</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.progress}>
            <button type="button" onClick={handleSize}><FaArrowLeft />&nbsp;voltar</button>
            <button type="button" onClick={handleSize}>próximo&nbsp;<FaArrowRight /></button>  
        </div>
        </>
    )
}