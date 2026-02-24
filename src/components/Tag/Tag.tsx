import styles from './Tag.module.css'

export interface TagProps {
  /** Text label displayed inside the tag */
  label: string
  /** Called when the remove button is clicked; omit to hide the button */
  onRemove?: () => void
  /** Disables the tag and its remove button */
  disabled?: boolean
  className?: string
}

export function Tag({ label, onRemove, disabled, className }: TagProps) {
  const classes = [styles.tag, disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <span className={styles.label}>{label}</span>
      {onRemove && (
        <button
          type="button"
          className={styles.remove}
          onClick={onRemove}
          disabled={disabled}
          aria-label={`Remove ${label}`}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
            <path
              d="M1 1L7 7M7 1L1 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  )
}
