// src/pages/Projects.jsx

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import ProjectCard from '../components/ui/ProjectCard'
import CategoryFilter from '../components/ui/CategoryFilter'
import { projects, categories } from '../data/projects'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory))
    }
  }, [activeCategory])

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
          title="My Projects"
          subtitle="Explore my latest creative works spanning various media and technologies"
          centered
        />

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Projects
                