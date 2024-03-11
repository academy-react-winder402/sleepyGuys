import Navbar from "@/components/Modules/Navbar/Navbar";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <div className="pt-8 sm:mx-8 lg:mx-20 relative">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
