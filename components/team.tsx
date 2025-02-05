/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Team.module.css'
import Image from 'next/image'
import Instagram from '../public/ig.png'
import Twitter from '../public/box-twitter.png'
import LinkedIn from '../public/linkedin.png'
import Github from '../public/github.png'
import Chuma from '../public/chuma.jpg'
import Ship from '../public/alien-merc.jpg'
import Star from '../public/star.jpg'
import Alien from '../public/alien2.jpg'

export default function Team() {
    return (
        <div>
            <div className={styles.teamTitle}>
                <h1>Meet The Team!</h1>
            </div>
            <div className={styles.mainContainer}>
                <Image src={Star} alt=" " layout="fill" className={styles.astro} />
                <div className={styles.teamContainer}>
                    <div className={styles.astroDescription}>
                        <Image src={Ship} alt=" " layout="fill" className={styles.astro} />
                        <p>Hello! I am Chukwuma & I am founder & lead developer of Space Age.</p>
                        <p>I am 23 years of age, I am am going to graduate from the University of Massachusetts Boston this spring with a Bachelor's of Science in Information Technology.</p>
                        <p>My dream is to become a full-stack developer and advance the uses of blockchain and web3 technology.</p>
                        <p>I have been programming off & on since 2016. Web3 has truly manifested my love for programming and I am forever grateful for this.</p>
                    </div>
                
                    <div className={styles.chumaDescription}>
                        <Image src={Chuma} alt=" " layout="fill" className={styles.chuma} />
                        <h3>Chukwuma Nnodim-Amadi</h3>
                    </div>

                    <div className={styles.astroDescription}>
                        <Image src={Alien} alt=" " layout="fill" className={styles.astro} />
                        <p>The overall goal of Space Age is to provide a simple, yet captivating game for all to enjoy</p>
                        <p>Also, to cultivate a community of like-minded individuals who are passionate about web3 technology and want to see Space Age flourish.</p>
                        <p>Space Age is a passion project of mine and I am excited to see where it goes.</p>
                        <p>Connect with me below!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}