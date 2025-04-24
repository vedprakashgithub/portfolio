import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import SkillBar from '../components/ui/SkillBar'
import Button from '../components/ui/Button'
import { skills, education } from '../data/projects'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="Learn more about my background, skills, and creative journey"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am a Master of Creative Arts student specializing in digital media and interactive design. With a background in visual arts and a keen interest in emerging technologies, I create immersive experiences that blend traditional artistic principles with innovative digital techniques.
              </p>
              <p>
                My creative journey began with traditional media—drawing, painting, and photography—before I discovered the potential of digital tools to expand my artistic practice. This transition led me to explore the intersections of art, design, and technology, particularly in interactive and immersive experiences.
              </p>
              <p>
                As a creator, I'm fascinated by the ways technology can enhance storytelling and create new forms of audience engagement. My work often explores themes of identity, memory, and human connection in the digital age, seeking to create meaningful experiences that resonate on both emotional and intellectual levels.
              </p>
              <p>
                I believe in the power of interdisciplinary collaboration and am constantly seeking opportunities to work with professionals from diverse backgrounds to create innovative projects that push the boundaries of creative expression.
              </p>
            </div>
            
            <div className="mt-8">
              <Button
                as="a"
                href="/resume.pdf"
                variant="outline"
                className="inline-flex items-center"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">My Skills</h3>
              
              <div className="mb-12">
                {skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    label={skill.name}
                    percentage={skill.percentage}
                    index={index}
                  />
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary-500">
                    <h4 className="text-xl font-bold">{item.degree}</h4>
                    <p className="text-primary-500 font-medium mb-2">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{item.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About