import "@/styles/globals.css";
import React from "react";
import Navigation from "@/components/navigation";
import { KEYWORDS } from "lib/utils/constants";
import cn from "@/lib/utils/cn";
import { fontSans, fontMono } from "./fonts";

export const metadata = {
    creator: "Drew Beamer",
    icons: {
        icon: "/favicon.png",
    },
    keywords: KEYWORDS,
    metadataBase: "https://www.drewbeamer.io/",
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
                className={cn(
                    "font-sans bg-background",
                    fontSans.variable,
                    fontMono.variable
                )}
            >
                <Navigation />
                <main>
                    <div className="max-w-screen-xl w-full mx-auto">
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
//  <Footer />
