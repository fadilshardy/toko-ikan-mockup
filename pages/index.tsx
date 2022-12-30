import Head from 'next/head'
import Advantages from '../src/components/Advantages/Advantages'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import ShippingTracker from '../src/components/ShippingTracker/ShippingTracker'

export default function Home() {
  return (
    <>
      <Head>
        <title>Toko Ikan</title>
        <meta name="description" content="Mockup Toko Ikan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <ShippingTracker />
        <Advantages />
      </main>
      <Footer />
    </>
  )
}
