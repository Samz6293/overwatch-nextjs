import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Nav from "./components/Nav";

const monument = localFont({
    src: "./fonts/MonumentExtended-Regular.otf",
    variable: "--font-monument"
})

const apple = localFont({
    src: "./fonts/AppleGaramond.ttf",
    variable: "--font-apple"
})

export const metadata: Metadata = {
  title: "Overwatch Heroes",
  description: "Detailed summary of all overwatch heroes and their origin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <>
            <html>
                <body className={`${monument.variable} ${apple.variable} text-white`}>
                    <Nav />
                    {children}
                </body>
            </html>
        </>
    );
}
