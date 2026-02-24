import { useState, useRef, useEffect } from 'react'
import styles from './Select.module.css'

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  /** List of selectable options */
  options: SelectOption[]
  /** Currently selected value (controlled) */
  value?: string
  /** Called when the user selects an option */
  onChange?: (value: string) => void
  /** Placeholder shown when nothing is selected */
  placeholder?: string
  /** Disables the select */
  disabled?: boolean
  className?: string
}

export function Select({
  options,
  value,
  onChange,
  placeholder = 'Please select',
  disabled,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Escape') setIsOpen(false)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen((prev) => !prev)
    }
  }

  const triggerClasses = [styles.trigger, isOpen && styles.open].filter(Boolean).join(' ')

  return (
    <div ref={wrapperRef} className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={triggerClasses}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? styles.selectedText : styles.placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={[styles.chevron, isOpen && styles.chevronOpen].filter(Boolean).join(' ')} aria-hidden="true">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox" aria-label="Options">
          {options.map((option) => {
            const isSelected = option.value === value
            const optionClasses = [styles.option, isSelected && styles.optionSelected]
              .filter(Boolean)
              .join(' ')
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                className={optionClasses}
                onClick={() => {
                  onChange?.(option.value)
                  setIsOpen(false)
                }}
              >
                <span className={styles.checkmark} aria-hidden="true">
                  {isSelected && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                {option.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
