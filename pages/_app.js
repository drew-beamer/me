import '../styles/globals.css';

import { Assistant } from '@next/font/google';
import Navbar from '../components/navbar';

const assistant = Assistant({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return <main className={`${assistant.className}`}>
        <Navbar/>
        <Component {...pageProps} />
    </main>

}