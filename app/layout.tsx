import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overwatch Heroes",
  description: "Detailed summary of all overwatch heroes and their origin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
}
