import "./globals.css";
import Header from "../components/Homepage/Header";
import { Roboto, Roboto_Mono } from "next/font/google";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Professional Coaching Services",
  description: "Transform your life and business with expert coaching",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}