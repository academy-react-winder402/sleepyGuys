import DefautLayout from "@/layouts/DefautLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const loginRoutes = ["/login", "/register"];

  const Layout = loginRoutes.includes(router.pathname)
    ? EmptyLayout
    : DefautLayout;

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
