import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { CardMounting } from '../components/CardMounting';
import { CardToday } from '../components/CardToday';
import styles from './home.module.scss';

export default function Home() {
  const [today, setToday] = useState([])
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products`)
    .then(res => {
      setToday(res.data[0].todayPromotion)
    })
  }, [])

  return (
    <>
    <Head>
      <title>Inicio | PizzaStoom</title>
    </Head>
      <main className={styles.contentContainer}>
        <section className={styles.cardContent}>
            <CardToday today={today} />
        </section>
        <section className={styles.cardContent}>
            <CardMounting />
        </section>
      </main>
    </>
  )
}