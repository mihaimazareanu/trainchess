import Head from "next/head";
import { IdProvider } from "react-use-id-hook";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Train Chess</title>
        <meta name="description" content="A short app for a coding challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IdProvider>
         <Component {...pageProps} />
      </IdProvider>
    </>
  )
}
