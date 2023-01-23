import Head from 'next/head';
import Image from 'next/image';
import styles from "./layout.module.css";
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Carousel from './carousel';

const name = 'Drew'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="The blog/portfolio of Drew Beamer"
            />
        </Head>
        <nav>
            <div className={styles.navbarContainer}>
                <div className={styles.navLogoContainer}>
                    <h3 className={utilStyles.headingLg}>{"<db>"}</h3>
                </div>
                <div className={styles.navButtonContainer}>
                    {["posts"].map((item) => {
                        return <Link className={`${styles.navButton} ${utilStyles.link}`} href={`/${item}`}><h4>{item}</h4></Link>
                    })}

                </div>
            </div>

        </nav>

        {home ? <header className={styles.header}>
            <div className={styles.hero}>
                <h2 className={utilStyles.headingXl} style={{ width: "100%", textAlign: "center" }}>Hello there 👋</h2>
                <h1 className={utilStyles.heading2Xl} style={{ width: "100%", textAlign: "center" }}>I'm Drew Beamer</h1>
                <h3 className={utilStyles.headingMd} style={{ width: "100%", textAlign: "center" }}>student | developer | birder</h3>
                <div className={styles.heroButtonRow}>
                    <Link href="/posts">
                    <button>Blog</button>
                    </Link>
                    <button onClick={() => {
                        window.location = "#contact"
                    }}>Contact</button>

                </div>

            </div>

            <div style={{ width: "100vw" }}>
                <Carousel />
            </div>

        </header > : null
        }
        <div className={styles.container}>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link className={utilStyles.link} href="/">Back to Home</Link>
                </div>
            )}
        </div>;
    </div >

}