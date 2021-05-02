import Head from 'next/head';
import React from 'react';
import { CardMounting } from '../components/CardMounting';
import { CardToday } from '../components/CardToday';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Inicio | PizzaStoom</title>
    </Head>
      <main className={styles.contentContainer}>
        <section className={styles.cardContent}>
            <CardToday />
        </section>
        <section className={styles.cardContent}>
            <CardMounting />
        </section>
      </main>
    </>
  )
}