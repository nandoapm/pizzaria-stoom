import { useState } from 'react'
import styles from '../screen.module.scss'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'


export function Flavor(props) {
    const [step, setStep] = useState(3)
    const [products, setProducts] = useState(new Array(props.orders.products))
    const [flavor, setFlavor] = useState({
		flavorOne: "",
		flavorTwo: "",
		flavorThree: "",
		flavorFour: "",
	})
    
    const handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setFlavor(prevState => ({
			...prevState,
			[name]: value
		}))
	}

    const handleFlavors = () => {
        props.getFalvors(step, flavor)
    }

    return (
        <>
        <section className={styles.screenContent}>
            <div className={styles.sideLeft}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Sabores dísponiveis:</h1>
                        <select id="flavorOne" value={flavor.flavorOne} name="flavorOne" onChange={handleChange}>
                            <option>Selecione o sabor</option>
                            {props.flavors.map((flavor, i) =>
                                <option key={i} value={flavor.name}>{ flavor.name }</option>
                            )}
                        </select>
                    </div>
                    {products[0].quantity >= 2 && 
                        <div>
                            <h1>Segundo sabor</h1>
                            <select id="flavorTwo" value={flavor.flavorTwo} name="flavorTwo" onChange={handleChange}>
                                <option>Selecione o sabor</option>
                                {props.flavors.map((flavor, i) =>
                                    <option key={i} value={flavor.name}>{ flavor.name }</option>
                                )}
                            </select>
                        </div>
                    }
                    
                </div>
            </div>
            <div className={styles.sideRight}>
                <div className={styles.cardOrder}>
                    {products[0].quantity >= 3 && 
                        <div>
                            <h1>Terceiro sabor:</h1>
                            <select id="flavorThree" value={flavor.flavorThree} name="flavorThree" onChange={handleChange}>
                                <option>Selecione o sabor</option>
                                {props.flavors.map((flavor, i) =>
                                    <option key={i} value={flavor.name}>{ flavor.name }</option>
                                )}
                            </select>
                        </div>
                    }
                    
                    {products[0].quantity >= 4 && 
                        <div>
                            <h1>Quarto sabor</h1>
                            <select id="flavorFour" value={flavor.flavorFour} name="flavorFour" onChange={handleChange}>
                                <option>Selecione o sabor</option>
                                {props.flavors.map((flavor, i) =>
                                    <option key={i} value={flavor.name}>{ flavor.name }</option>
                                )}
                            </select>
                        </div>
                    }
                    
                </div>
            </div>
        </section>
        <div className={styles.progress}>
            <button type="button" onClick={handleFlavors}><FaArrowLeft />&nbsp;voltar</button>
            <button type="button" onClick={handleFlavors}>próximo&nbsp;<FaArrowRight /></button>  
        </div>
        </>
    )
}