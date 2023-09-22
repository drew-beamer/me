import "../styles/globals.css";

import { Poppins } from "next/font/google";
import Navbar from "../components/ui-components/navbar";
import Footer from "components/ui-components/footer";
import { KEYWORDS } from "lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  colorScheme: "dark",
  creator: "Drew Beamer",
  icons: {
    icon: "/favicon.png",
  },
  keywords: KEYWORDS,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${poppins.className} mx-4 flex max-w-2xl flex-col antialiased sm:mx-auto md:flex-row`}
      >
        <main className="prose-slate mx-auto min-w-0 flex-auto">
          <Navbar />
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}
//  <Footer />
