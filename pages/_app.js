import '../styles/globals.css';

import { Assistant } from '@next/font/google';

const assistant = Assistant({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    return <main className={`${assistant.className}`}>
        <Component {...pageProps} />
    </main>

}