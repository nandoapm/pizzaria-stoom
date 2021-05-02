import Head from 'next/head'
import React from 'react'
import { AssistantShipping } from '../../components/AssistantShipping'
import styles from './createOrder.module.scss'

export default function CreateOrder() {
    return (
        <>
        <Head>
            <title>Create | PizzaStoom</title>
        </Head>
        <main className={styles.contentContainer}>
            <section className={styles.cardContent}>
                <AssistantShipping />
            </section>
        </main>
        </>
    )
}