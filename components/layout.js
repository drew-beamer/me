import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Drew Beamer'

export default function Layout({ children, home }) {
    return <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="The blog/portfolio of Drew Beamer"
            />
        </Head>
        <div>

            <main className='flex justify-center'>
                <div className='mt-0 sm:mt-12 mx-10 sm:mx-0 max-w-[540px]'>
                    {children}
                </div>


            </main>
            {!home && (
                <div>
                    <Link href="/">Back to Home</Link>
                </div>
            )}
        </div>
    </div>
}