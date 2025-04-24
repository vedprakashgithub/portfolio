import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg bg-primary-500 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-lg bg-secondary-500/20 -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5"
          >
            <SectionHeader
              title="About Me"
              subtitle="A passionate MCA student specializing in AI and Full Stack Development"
            />
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I am a Master of Computer Applications student with a focus on Artificial Intelligence and Web Development. My expertise lies in developing scalable applications and implementing machine learning solutions that solve real-world problems.
              </p>
              <p>
                With a strong foundation in computer science and modern development practices, I create innovative solutions that combine cutting-edge AI technologies with robust software engineering principles.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <span className="block text-3xl font-bold text-primary-500">15+</span>
                <span className="text-gray-600 dark:text-gray-400">Projects Completed</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary-500">5+</span>
                <span className="text-gray-600 dark:text-gray-400">AI Models Deployed</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-primary-500">3+</span>
                <span className="text-gray-600 dark:text-gray-400">Research Papers</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button as="link" to="/about" variant="outline">
                More About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview