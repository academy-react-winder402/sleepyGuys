import { useTheme } from "next-themes";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { theme } = useTheme();
  return (
    <Html lang="en" dir="rtl">
      <Head />
      <body className={`${theme === "light" && "bg-[#f3f4f6]"} h-[100dvh]`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
