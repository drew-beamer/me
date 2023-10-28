import "@/styles/globals.css";
import Navigation from "@/components/navigation";
import { KEYWORDS } from "lib/constants";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

export const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
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
      <body className={cn("font-sans bg-background", fontSans.variable)}>
        <Navigation />
        <main className={"max-w-screen-xl w-full mx-auto min-h-[720px]"}>
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
//  <Footer />
