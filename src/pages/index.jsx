import Head from 'next/head'

import { Sponsor } from '@/components/Sponsor'
import { Reviews } from '@/components/Reviews'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Beneficiaries } from '@/components/Beneficiaries'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>TechElevate</title>
        <meta
          name="description"
          content="We train and mentor aspiring computer scientists and engineers, connect them to opportunities, and fuel their innovation."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Beneficiaries />
        <Testimonials />

        {/* <SecondaryFeatures /> */}
        <Sponsor />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
