import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/header"
import CardMovie from "../components/cardMovie"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div classNAme={styles.main}>
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>
        <CardMovie/>
      </div>
    </div>
  )
}
