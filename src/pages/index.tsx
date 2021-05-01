import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Inicio | PizzaStoom</title>
    </Head>
      <main className={styles.contentContainer}>
        <section className={styles.cardContent}>
            <h1>Minha home</h1>
        </section>
        <section className={styles.cardContent}>
            <h1>Minha home</h1>
        </section>
        <section className={styles.cardContent}>
            <h1>Minha home</h1>
        </section>
      </main>
    </>
  )
}