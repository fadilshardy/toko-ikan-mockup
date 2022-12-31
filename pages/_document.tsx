import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*
        <link rel="stylesheet" href="/fonts/gilroy/Gilroy-Regular.ttf" />
        <link rel="stylesheet" href="/fonts/gilroy/Gilroy-medium.ttf" /> */}


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
