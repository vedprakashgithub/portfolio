import { motion } from 'framer-motion'
import Button from '../ui/Button'

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-gray-800 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full mb-6">
                Ved Prakash Portfolio
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Building <span className="text-primary-500">Intelligent</span> Solutions Through Code
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            >
              Specializing in Artificial Intelligence and Full Stack Development, creating innovative solutions that bridge technology and real-world applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button as="link" to="/projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button as="link" to="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678917651747-5c58fda9e7f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRmb2xpb3xlbnwwfDB8MHx8fDA%3D"
                  alt="Programming and AI visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent-500/20 backdrop-blur-sm"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary-500/20 backdrop-blur-sm"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection