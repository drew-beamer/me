import '../styles/globals.css';

import { Assistant } from '@next/font/google';
import Navbar from "../components/ui-components/navbar";

const assistant = Assistant({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${assistant.className}`}>
        <Navbar />
        <main className='flex justify-center'>
          <div className='mt-0 sm:mt-12 mx-10 sm:mx-0 sm:w-[540px]'>
            {children}
          </div>
        </main>
      </body >
    </html >


  )
}
