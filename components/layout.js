import Head from 'next/head';
import Link from 'next/link';
import Navbar from './navbar';

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

            <main className='flex justify-center '>
                <div className='mt-20 px-7 sm:px-0 max-w-[540px]'>
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