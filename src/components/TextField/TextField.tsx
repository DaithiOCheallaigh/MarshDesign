import { type InputHTMLAttributes, type ReactNode, forwardRef } from 'react'
import styles from './TextField.module.css'

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label displayed above the input */
  label?: string
  /** Helper or error message below the input */
  helperText?: string
  /** Mark the field as having an error */
  error?: boolean
  /** Optional icon rendered inside the input (leading position) */
  leadingIcon?: ReactNode
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, helperText, error, leadingIcon, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ')

    const inputClasses = [
      styles.input,
      error && styles.error,
      leadingIcon && styles.withIcon,
      props.disabled && styles.disabled,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClasses}>
        {label && (
          <label className={styles.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={styles.inputContainer}>
          {leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
          <input ref={ref} id={inputId} className={inputClasses} {...props} />
        </div>
        {helperText && (
          <span className={error ? styles.errorText : styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    )
  }
)

TextField.displayName = 'TextField'
