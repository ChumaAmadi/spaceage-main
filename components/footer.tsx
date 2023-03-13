import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Twitter from '../public/twitter.png'
import Discord from '../public/discord.png'
import Magic from '../public/magic-eden.png'
import Solana from '../public/solana.png'

export default function Footer() {
    return (
        <div>
            <div className={styles.mainContainer}>
                <div className={styles.footerLeft}>
                    <h3>© 2023 Space Age</h3>
                    <div className={styles.solanaContainer}>
                        <Image src={Solana} alt=" " className={styles.solana} />
                    </div>
                    <h3 className={styles.solanaHeader}>Built On The Solana Ecosystem</h3>
                </div>
                <div className={styles.footerRight}>
                    <h3>Follow Our Journey!</h3>
                    <div className={styles.socials}>
                        <div className={styles.img1}>
                            <Image src={Twitter} alt=" " className={styles.twitter} />
                        </div>
                        <div className={styles.img2}>
                            <Image src={Discord} alt=" " className={styles.discord} />
                        </div>
                        <div className={styles.img3}>
                            <Image src={Magic} alt=" " className={styles.magic} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 