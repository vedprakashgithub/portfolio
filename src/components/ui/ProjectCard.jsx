import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:shadow-lg"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* Visit Website Link (shown only if project.website exists) */}
      {project.link && (
        <div className="p-6 pt-0">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            Visit Website →
          </a>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard
