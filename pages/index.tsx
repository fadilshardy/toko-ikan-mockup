import Head from 'next/head'
import Advantages from '../src/components/Advantages/Advantages'
import DeliveryMethod from '../src/components/DeliveryMethod/DeliveryMethod'
import DownloadMobileApp from '../src/components/DownloadMobileApp/DownloadMobileApp'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import ScheduleCheck from '../src/components/ScheduleCheck/ScheduleCheck'
import ShippingTracker from '../src/components/ShippingTracker/ShippingTracker'
import Testimonials from '../src/components/Testimonial/Testimonials'
import TrackingStatus from '../src/components/TrackingStatus/TrackingStatus'

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
      <main className="overflow-hidden">
        <ShippingTracker />
        <Advantages />
        <DeliveryMethod />
        <TrackingStatus />
        <ScheduleCheck />
        <Testimonials />
        <DownloadMobileApp />
      </main>
      <Footer />
    </>
  )
}
