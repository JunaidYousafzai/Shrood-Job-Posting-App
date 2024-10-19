import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoCard from '../components/InfoCard'
import Testimonials from '../components/Testimonals'
import Layout from '../components/Layout'


const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <InfoCard />
      <Testimonials />
    </Layout>
  )
}

export default Home