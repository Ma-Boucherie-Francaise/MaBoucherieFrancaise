import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./_components/TopBar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Loader from "./_components/Loader";

const awesomeSerif = localFont({
  src: "./fonts/AwesomeSerif-BoldExtraTall.otf",
  style: "normal",
  variable: "--font-awesome-serif",
});

const golosText = Golos_Text({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-golos-text",
});

export const metadata = {
  title:
    "Accueil - Ma Boucherie Française — Sublimez vos tables avec ma Boucherie Française.",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${awesomeSerif.variable} ${golosText.variable} antialiased`}
      >
        <Loader />
        <TopBar text={"-10 % de réduction sur votre première commande"} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
