import { useState } from 'react'
import Head from 'next/head'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { IoMdCloseCircle } from 'react-icons/io'
import { AssistantShipping } from '../../components/AssistantShipping'
import { Size } from './screen/Size'
import { Flavor } from './screen/Flavor'
import { Additional } from './screen/Additional'
import { Finished } from './screen/Finished'
import styles from './createOrder.module.scss'


export default function CreateOrder() {
    const [step, setStep] = useState(1)

    const handleCreate = () => {
        console.log("concluir")
    }
    return (
        <>
        <Head>
            <title>Create | PizzaStoom</title>
        </Head>
        <main className={styles.contentContainer}>
            <section className={styles.cardContent}>
                <div className={styles.close}>
                    <button ><IoMdCloseCircle /></button>
                </div>
                <AssistantShipping step={step} />

                { step === 1 && <Size /> }
                { step === 2 && <Flavor /> }
                { step === 3 && <Additional /> }
                { step === 4 && <Finished /> }

                <div className={styles.progress}>
                    <button type="button" onClick={() => setStep(step - 1)}><FaArrowLeft />&nbsp;voltar</button>
                    {step === 4
                        ? <button type="button" onClick={handleCreate}>Concluir&nbsp;<FaArrowRight /></button> 
                        : <button type="button" onClick={() => setStep(step + 1)}>próximo&nbsp;<FaArrowRight /></button>  
                    }
                </div>
            </section>
        </main>
        </>
    )
}