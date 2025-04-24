import { Link } from 'react-router-dom'
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FiInstagram className="w-5 h-5" />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiMail className="w-5 h-5" />, url: 'mailto:hello@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary-500">
              <span className="text-primary-600 dark:text-primary-400">Portfolio.</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              Showcasing creative projects and designs from my MCA journey.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Home</Link>
              <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Projects</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer