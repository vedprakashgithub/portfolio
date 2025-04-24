import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const SkillBar = ({ label, percentage, index }) => {
  const controls = useAnimation()
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 0.8, delay: index * 0.2 }
      })
    }
  }, [controls, isInView, percentage, index])

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{label}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          onViewportEnter={() => setIsInView(true)}
          className="h-full bg-primary-500 rounded-full"
        />
      </div>
    </div>
  )
}

export default SkillBar