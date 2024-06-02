import DefautLayout from "@/layouts/DefautLayout";
import EmptyLayout from "@/layouts/EmptyLayout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const loginRoutes = ["/login", "/register", "/resetPassword"];

  const queryClient = new QueryClient();

  const Layout = loginRoutes.includes(router.pathname)
    ? EmptyLayout
    : DefautLayout;

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "font-peyda",
                }}
              />
            </Layout>
          </HydrationBoundary>
        </QueryClientProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
