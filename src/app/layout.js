import {Inter, Arima} from "next/font/google";
import "./globals.css";
import "./assets/css/style.css";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
  display: 'swap',
});
 
const arima = Arima({
  subsets: ['latin'],
  variable: "--font-arima",
  display: 'swap',
  fallback: ["system-ui"],
});

export const metadata = {
  title: "Madusanka - a Passionate Frontend Developer",
  description: "a Passionate Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${arima.variable}`}>
        {children}
      </body>
    </html>
  );
}
