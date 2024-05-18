import { Poppins, Source_Code_Pro as SourceCodePro } from "next/font/google";

export const fontSans = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
});

export const fontMono = SourceCodePro({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-mono",
});
