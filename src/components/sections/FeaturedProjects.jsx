import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'
import { featuredProjects } from '../../data/projects'
import { FiExternalLink } from 'react-icons/fi';

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my most recent and notable creative works"
          centered
        />
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow`}>
                <div className="lg:w-1/2 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                

                  {/* Website Link */}
                  {project.link && (
                    <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 underline hover:text-blue-800 mx-3 transition-colors duration-200 mb-4"
                  >
                    Visit Website
                    <FiExternalLink className="inline w-4  h-4" />
                  </a>
                  )}

                  {/* View Project button */}
                  <div>
                    <Button 
                      as="link"
                      to={`/projects/${project.id}`}
                      variant="primary"
                    >
                      View Project
                    </Button>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button as="link" to="/projects" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
