import type { Meta, StoryObj } from '@storybook/react'
import styles from './Tokens.module.css'

const SCALE = [
  { name: '2XS', token: '--space-2xs', px: 2, multiplier: '0.25×' },
  { name: 'XS', token: '--space-xs', px: 4, multiplier: '0.5×' },
  { name: 'S', token: '--space-s', px: 8, multiplier: '1×' },
  { name: 'M', token: '--space-m', px: 12, multiplier: '1.5×' },
  { name: 'L', token: '--space-l', px: 16, multiplier: '2×' },
  { name: 'XL', token: '--space-xl', px: 24, multiplier: '3×' },
  { name: '2XL', token: '--space-2xl', px: 32, multiplier: '4×' },
  { name: '3XL', token: '--space-3xl', px: 40, multiplier: '5×' },
  { name: '4XL', token: '--space-4xl', px: 48, multiplier: '6×' },
  { name: '5XL', token: '--space-5xl', px: 56, multiplier: '7×' },
  { name: '6XL', token: '--space-6xl', px: 64, multiplier: '8×' },
  { name: '7XL', token: '--space-7xl', px: 72, multiplier: '9×' },
  { name: '8XL', token: '--space-8xl', px: 80, multiplier: '10×' },
  { name: '9XL', token: '--space-9xl', px: 88, multiplier: '11×' },
  { name: '10XL', token: '--space-10xl', px: 96, multiplier: '12×' },
  { name: '11XL', token: '--space-11xl', px: 104, multiplier: '13×' },
  { name: '12XL', token: '--space-12xl', px: 112, multiplier: '14×' },
] as const

const MAX_BAR = 112

function Spacing() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Spacing</h1>
      <p className={styles.subtitle}>
        An 8px base scale with 17 steps from 2px to 112px. Each step is a
        multiplier of the base unit.
      </p>

      <h2 className={styles.sectionTitle}>Scale</h2>

      {/* Header row */}
      <div className={styles.spaceRow} style={{ borderBottom: '2px solid var(--color-gray-100)' }}>
        <span className={styles.spaceLabel} style={{ fontWeight: 500, color: 'var(--color-gray-500)', fontSize: 12 }}>
          Size
        </span>
        <div style={{ flex: 1, fontSize: 12, fontWeight: 500, color: 'var(--color-gray-500)' }}>
          Visual
        </div>
        <span className={styles.spaceMeta} style={{ fontWeight: 500, color: 'var(--color-gray-500)' }}>
          Multiplier &middot; Value
        </span>
      </div>

      {SCALE.map((s) => (
        <div key={s.name} className={styles.spaceRow}>
          <span className={styles.spaceLabel}>{s.name}</span>
          <div style={{ flex: 1 }}>
            <div
              className={styles.spaceBar}
              style={{ width: `${(s.px / MAX_BAR) * 100}%`, minWidth: 2 }}
            />
          </div>
          <span className={styles.spaceMeta}>
            {s.multiplier} &middot; {s.px}px
          </span>
        </div>
      ))}

      <h2 className={styles.sectionTitle}>Tokens</h2>
      <table className={styles.typeTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>CSS Token</th>
            <th>Multiplier</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {SCALE.map((s) => (
            <tr key={s.name}>
              <td><strong>{s.name}</strong></td>
              <td className={styles.typeMeta}>{s.token}</td>
              <td className={styles.typeMeta}>{s.multiplier}</td>
              <td className={styles.typeMeta}>{s.px}px</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta: Meta = {
  title: 'Sub Atomic/Spacing',
  component: Spacing,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
