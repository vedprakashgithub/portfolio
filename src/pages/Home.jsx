import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import AboutPreview from '../components/sections/AboutPreview'
import ContactForm from '../components/sections/ContactForm'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ContactForm />
    </motion.div>
  )
}

export default Home