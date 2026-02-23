import type { Meta, StoryObj } from '@storybook/react'
import styles from './Tokens.module.css'

const RADII = [
  {
    name: 'Small',
    token: '--radius-small',
    value: '4px',
    usage: 'Badges, checkboxes, avatar labels, keyboard shortcuts',
  },
  {
    name: 'Medium',
    token: '--radius-medium',
    value: '8px',
    usage: 'Buttons, inputs, text areas, selects, navigation items',
  },
  {
    name: 'Large',
    token: '--radius-large',
    value: '20px',
    usage: 'Cards, dialogs, panels, primary action buttons',
  },
  {
    name: 'Full',
    token: '--radius-full',
    value: '999px',
    usage: 'Avatars, radio buttons, pill badges, circular elements',
  },
] as const

function Radius() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Radius</h1>
      <p className={styles.subtitle}>
        Four border-radius tokens from subtle rounding to fully circular.
      </p>

      <h2 className={styles.sectionTitle}>Values</h2>
      <div className={styles.radiusGrid}>
        {RADII.map((r) => (
          <div key={r.name} className={styles.radiusCard}>
            <div
              className={styles.radiusSample}
              style={{ borderRadius: r.value }}
            />
            <div className={styles.radiusLabel}>
              radius.{r.name.toLowerCase()}
            </div>
            <div className={styles.radiusValue}>
              {r.value} &mdash; {r.token}
            </div>
            <div className={styles.radiusUsage}>{r.usage}</div>
          </div>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>In Context</h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Small — badge */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '2px 8px',
              fontSize: 12,
              fontWeight: 500,
              backgroundColor: 'var(--color-blue-tint)',
              color: 'var(--color-dark-blue)',
              borderRadius: 'var(--radius-small)',
            }}
          >
            Badge
          </span>
          <span className={styles.radiusValue}>4px — small</span>
        </div>

        {/* Medium — button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <button
            style={{
              padding: '8px 20px',
              fontSize: 14,
              fontWeight: 500,
              fontFamily: 'var(--font-family)',
              backgroundColor: 'var(--color-dark-blue)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-medium)',
              cursor: 'pointer',
            }}
          >
            Button
          </button>
          <span className={styles.radiusValue}>8px — medium</span>
        </div>

        {/* Large — card */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 120,
              height: 60,
              backgroundColor: 'var(--color-gray-100)',
              borderRadius: 'var(--radius-large)',
              border: '1px solid var(--color-gray-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              color: 'var(--color-gray-500)',
            }}
          >
            Card
          </div>
          <span className={styles.radiusValue}>20px — large</span>
        </div>

        {/* Full — avatar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 48,
              height: 48,
              backgroundColor: 'var(--color-teal)',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              fontWeight: 700,
              color: 'white',
            }}
          >
            DS
          </div>
          <span className={styles.radiusValue}>999px — full</span>
        </div>
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Sub Atomic/Radius',
  component: Radius,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
