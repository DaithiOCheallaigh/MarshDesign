import { type InputHTMLAttributes, forwardRef } from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label displayed beside the checkbox */
  label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ')

    return (
      <label className={wrapperClasses} htmlFor={inputId}>
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          className={styles.nativeInput}
          {...props}
        />
        <span className={styles.checkmark}>
          <svg
            className={styles.checkIcon}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6L5 9L10 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'
