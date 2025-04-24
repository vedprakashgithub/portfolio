import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef(({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  as = 'button',
  to,
  href,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-500',
    outline: 'border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 bg-transparent',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (as === 'link' && to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    )
  }
  
  if (as === 'a' && href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button