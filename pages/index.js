import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import FeaturedCarousel from '@/components/FeaturedCarousel'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div>
        <FeaturedCarousel />
      </div>
    </>
  )
}
export default Home
