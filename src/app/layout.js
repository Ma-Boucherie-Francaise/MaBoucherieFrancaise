import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./_components/TopBar";
import Header from "./_components/Header";

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
        <TopBar text={"-10 % de réduction sur votre première commande"} />
        <Header />
        {children}
      </body>
    </html>
  );
}
