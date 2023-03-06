/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Space from '../components/space'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Ufo from '../public/ufo.gif'
import Features from './game-features'
import Roadmap from '../components/roadmap'
import Team from '../components/team'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Space Age</title>
        <meta name="description" content="Generated by Next.js" />
        <link rel="icon" href="spaceage.png" />
      </Head>
      <Space />
      <Navbar />
      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.mainLeft}>
            <h1 className={styles.title}>Space Age</h1>
            <p className={styles.description}>Web3 is like a spacecraft: we are the astronauts.</p>
            <p className={styles.description}>We are the ones who will take Web3 games to the next level through Solana.</p>
            <p className={styles.description}>At Space Age, our mission is to create a captivating and immersive text-adventure game 
            <br />that combines elements of popular games such as The Oregon Trail and Runescape to  deliver
            <br />a unique experience and engaging experience. The hope is that the functionalities of this game 
            <br />along with it's simplicity will allow for a wide range of users to enjoy it and keep coming back.</p>
          </div>
          <div className={styles.mainRight}>
            <Image src={Ufo} alt=" " width={300} height={300} className={styles.ufo} />
          </div>
        </div>
      </main>
      <Features />
      <Roadmap />
      <Team />
      <Footer />
    </div>
  )
}
