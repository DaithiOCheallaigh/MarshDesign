import { type InputHTMLAttributes, forwardRef } from 'react'
import styles from './SearchBar.module.css'

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Placeholder text shown inside the input */
  placeholder?: string
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, placeholder = 'Search…', ...props }, ref) => {
    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ')

    return (
      <div className={wrapperClasses}>
        <span className={styles.icon} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <input
          ref={ref}
          type="search"
          className={[styles.input, props.disabled && styles.disabled].filter(Boolean).join(' ')}
          placeholder={placeholder}
          {...props}
        />
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'
