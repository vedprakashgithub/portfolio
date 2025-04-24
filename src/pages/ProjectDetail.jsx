import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiCalendar, FiUser, FiBriefcase } from 'react-icons/fi'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id))
    if (foundProject) {
      setProject(foundProject)
      setCurrentImageIndex(0)
    }
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="mb-8">The project you're looking for doesn't exist.</p>
          <Button as="link" to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 md:pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <Link
          to="/projects"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8"
            >
              <div className="flex items-center">
                <FiCalendar className="mr-2" />
                <span>{project.date}</span>
              </div>
              {project.client && (
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  <span>Client: {project.client}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center">
                  <FiBriefcase className="mr-2" />
                  <span>Role: {project.role}</span>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <img
              src={project.gallery[currentImageIndex]}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>

          {project.gallery && project.gallery.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-12"
            >
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden ${
                    currentImageIndex === index
                      ? 'ring-4 ring-primary-500'
                      : 'opacity-70 hover:opacity-100'
                  } transition-all duration-200`}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                {project.detailed_description}
              </p>
            </div>

            {/* Visit Website Button (if available) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Visit Website
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail
