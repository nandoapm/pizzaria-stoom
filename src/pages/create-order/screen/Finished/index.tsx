import { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import styles from '../screen.module.scss'

export function Finished(props) {
    const [step, setStep] = useState(4)
    const [products, setProducts] = useState([])
    const [flavors, setFlavors] = useState([])
    const [additionals, setAdditionals] = useState([])
    const [price, setPrice] = useState("")
    const [points, setPoints] = useState("")

    useEffect(() => {
        console.log(props.today)
        setProducts( new Array(props.orders.products))
        setFlavors(new Array(props.orders.flavors))
        setAdditionals(new Array(props.orders.additionals))
        setPrice(props.priceDrink[0].price + props.pricePizza[0].price)
        setPoints(props.pricePizza[0].points)
    }, [])

    const handleCreateOrder = () => {
        const pointsOld =  localStorage.getItem('points');
        localStorage.setItem('points', pointsOld + points);
        window.location.href = '/'
    }

    return (
        <>
        <section className={styles.screenContent}>
            <div className={styles.sideLeft}>
                <div className={styles.cardOrder}>
                    <div className={styles.cardFinish}>
                        <h1>Seu Pedido</h1>
                        {products.map((product, i) =>
                            <div key={i}>
                                <label><strong>Massa:&nbsp;</strong>{product.mass}</label><br />
                                <label><strong>Tamanho:&nbsp;</strong>{product.size}</label><br />
                                <label><strong>Sabores:&nbsp;</strong>{product.quantity}</label><br />
                            </div>
                        )}
                    </div>
                    <div className={styles.cardFinish}>
                        <h1>Sabores</h1>
                        {flavors.map((flavor, i) =>
                            <div key={i}>
                                { flavor.flavorOne !== "" ? <><label><strong>Sabor 1:&nbsp;</strong>{flavor.flavorOne}</label><br /></> : null }
                                { flavor.flavorTwo !== "" ? <><label><strong>Sabor 2:&nbsp;</strong>{flavor.flavorTwo}</label><br /></> : null }
                                { flavor.flavorThree !== "" ? <><label><strong>Sabor 3:&nbsp;</strong>{flavor.flavorThree}</label><br /></> : null }
                                { flavor.flavorFour !== "" ? <><label><strong>Sabor 4:&nbsp;</strong>{flavor.flavorFour}</label><br /></> : null }
                            </div>
                        )}
                    </div>
                    <div className={styles.cardFinish}>
                        <h1>Adicionais</h1>
                        {additionals.map((additional, i) =>
                            <div key={i}>
                                <label><strong>Adicional:&nbsp;</strong>{additional.additional}</label><br />
                                <label><strong>Bebibda:&nbsp;</strong>{additional.drink}</label><br />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.sideRight}>
                <div className={styles.cardOrder}>
                    <div>
                        <h1>Valores</h1>
                        <span>R$&nbsp;{price},00</span>
                    </div>
                    <div>
                        <h1>Pontos</h1>
                        <span>{points}</span>
                    </div>
                </div>
            </div>
        </section>
        <div className={styles.progress}>
            <button type="button" onClick={handleCreateOrder}><FaArrowLeft />&nbsp;voltar</button>
            <button type="button" onClick={handleCreateOrder}>Confirmar&nbsp;<FaArrowRight /></button>  
        </div>
        </>
    )
}