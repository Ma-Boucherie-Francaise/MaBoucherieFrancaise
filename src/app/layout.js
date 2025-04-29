"use client";
import { Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "./_components/TopBar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Loader from "./_components/Loader";
import CustomCursor from "./_components/CustomCursor";
import Popup from "./_components/Popup";
import { createContext, useState } from "react";
import content from "@/app/_data/content.json";
import Timer from "./_components/Timer";

export const AppContext = createContext();

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

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isTimerDown, setIsTimerDown] = useState(false);
  return (
    <AppContext.Provider value={{ loading: isLoading }}>
      <html lang="fr" className="scroll-smooth">
        <body
          className={`${awesomeSerif.variable} ${golosText.variable} antialiased `}
        >
          {/* {!isTimerDown && content.time ? (
            <Timer setIsTimerDown={setIsTimerDown} />
          ) : ( */}
            <>
              <CustomCursor />
              <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
              <Popup />
              <TopBar text={"-10 % de réduction sur votre première commande"} />
              <Header />
              {children}
              <Footer />
            </>
          {/* )} */}
        </body>
      </html>
    </AppContext.Provider>
  );
}
