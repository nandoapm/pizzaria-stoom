import { useEffect, useState } from 'react'
import Head from 'next/head'

import { IoMdCloseCircle } from 'react-icons/io'
import { AssistantShipping } from '../../components/AssistantShipping'
import { Loading } from '../../components/Loading'
import { Size } from './screen/Size'
import { Flavor } from './screen/Flavor'
import { Additional } from './screen/Additional'
import { Finished } from './screen/Finished'
import styles from './createOrder.module.scss'
import axios from 'axios'

export default function CreateOrder() {
    const [step, setStep] = useState(1)
    const [pricePizza, setPricePizza] = useState([])
    const [priceDrink, setPriceDrink] = useState([])
    const [products, setProducts] = useState([])
    const [additionals, setAdditionals] = useState([])
    const [flavors, setFlavors] = useState([])
    const [orders, setOrders] = useState({
		products: "",
		flavors: "",
        additionals: ""
	})

    useEffect(() => {
        axios.get(`http://localhost:3000/api/products`)
        .then(res => {
            setProducts(res.data[0].products)
            setAdditionals(res.data[0].additionals)
            setFlavors(res.data[0].flavors)
        })
        localStorage.setItem('points', "");
    }, [])

    const getProducts = (step, product) => {
        setStep(step)
        setOrders(({
			...orders,
			products: product
		}))
        const prices = products.filter(item => {
            if(item.type === product.size) {
                return item.price
            }}
        )
        setPricePizza(prices)

    }

    const getFalvors = (step, flavors) => {
        setStep(step)
        setOrders(({
			...orders,
			flavors: flavors
		}))

        console.log(orders)  
    }

    const getAdditionals = (step, additional) => {
        console.log(additional)
        setStep(step)
        setOrders(({
			...orders,
			additionals: additional
		}))
        const prices = additionals.filter(item => {
            if(item.drinks === additional.drink) {
                return item.price
            }}
        )
        setPriceDrink(prices)
    }

    return (
        <>
        <Head>
            <title>Create | PizzaStoom</title>
        </Head>
        
        <main className={styles.contentContainer}>
            {/* <Loading /> */}
            <section className={styles.cardContent}>
                <div className={styles.close}>
                    <a href="/"><IoMdCloseCircle /></a>
                </div>
                <AssistantShipping step={step} />

                { step === 1 && <Size products={products} getProducts={getProducts} /> }
                { step === 2 && <Flavor flavors={flavors} getFalvors={getFalvors} orders={orders} /> }
                { step === 3 && <Additional additionals={additionals} getAdditionals={getAdditionals} /> }
                { step === 4 && <Finished orders={orders} pricePizza={pricePizza} priceDrink={priceDrink} /> }

            </section>
        </main>
        </>
    )
}