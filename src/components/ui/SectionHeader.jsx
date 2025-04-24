import { motion } from 'framer-motion'

const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <header className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            {subtitle}
          </p>
        )}
      </motion.div>
    </header>
  )
}

export default SectionHeader