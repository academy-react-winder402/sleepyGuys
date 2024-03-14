import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" dir="rtl">
      <Head />
      <body className={`h-[100dvh]`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
