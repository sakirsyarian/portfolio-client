import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Ahmad Sarian",
    description: "Portfolio Ahmad Sarian",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/icon.png" sizes="any" />
            <body className={poppins.className}>
                <div className="bg-gray-50">{children}</div>
            </body>
        </html>
    );
}
