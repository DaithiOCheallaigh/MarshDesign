import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'danger' | 'outline'
  /** Size of the button */
  size?: 'small' | 'medium' | 'large'
  /** Optional icon element rendered after the label */
  icon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'medium',
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classNames} {...props}>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  )
}
