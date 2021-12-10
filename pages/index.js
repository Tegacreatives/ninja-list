import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid quod dolorum delectus non quaerat minima commodi provident porro magnam, maiores ea optio, consequuntur cupiditate reprehenderit at odit, eligendi rerum!</p>
        <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a></Link>
   </div>
   </>
  )
}
