import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../screen.module.scss'

export function Additional(props) {
    const [step, setStep] = useState(4)
    const [additionals, setAdditionals] = useState({
		drink: "",
		additional: "",
	})
    
    const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setAdditionals(prevState => ({
			...prevState,
			[name]: value
		}))
	}

    const handleAdditional = () => {
        props.getAdditionals(step, additionals)
    }
    return (
        <>
        <section className={styles.screenContent}>
            <div className={styles.sideLeft}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Adicionais:<strong>Obs: R$ 3,99</strong></h1>
                        <select id="additional" name="additional" value={additionals.additional} onChange={handleChange}>
                            <option>Adicionais</option>
                            {props.additionals.map((item, i) =>
                                <option key={i} value={item.additional}>{item.additional}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.sideRight}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Bebidas</h1>
                        <select id="drink" name="drink" value={additionals.drink} onChange={handleChange}>
                            <option>Escolha uma bebida</option>
                            {props.additionals.map((item, i) =>
                                <option key={i} value={item.drinks}>{ item.drinks } | R${item.price}</option>
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.progress}>
            <button type="button" onClick={handleAdditional}><FaArrowLeft />&nbsp;voltar</button>
            <button type="button" onClick={handleAdditional}>próximo&nbsp;<FaArrowRight /></button>  
        </div>
        </>
    )
}