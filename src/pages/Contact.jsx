import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import ContactForm from '../components/sections/ContactForm'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-20"
    >
      <div className="container mx-auto px-4 mb-16">
        <SectionHeader
          title="Contact Me"
          subtitle="Have a project in mind or want to discuss a collaboration? Let's get in touch!"
          centered
        />
      </div>
      
      <ContactForm />
    </motion.div>
  )
}

export default Contact