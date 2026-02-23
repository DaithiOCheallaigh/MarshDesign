import type { Meta, StoryObj } from '@storybook/react'
import styles from './Tokens.module.css'

const HIERARCHY = [
  {
    name: 'Large Header',
    size: '16px',
    weight: 'Bold (700)',
    token: '--font-size-header-lg',
    style: { fontSize: 16, fontWeight: 700 },
  },
  {
    name: 'Small Header',
    size: '14px',
    weight: 'Bold (700)',
    token: '--font-size-header-sm',
    style: { fontSize: 14, fontWeight: 700 },
  },
  {
    name: 'Text (Medium)',
    size: '14px',
    weight: 'Medium (500)',
    token: '--font-size-body',
    style: { fontSize: 14, fontWeight: 500 },
  },
  {
    name: 'Body',
    size: '14px',
    weight: 'Regular (400)',
    token: '--font-size-body',
    style: { fontSize: 14, fontWeight: 400 },
  },
  {
    name: 'Baseline Bold',
    size: '12px',
    weight: 'Bold (700)',
    token: '--font-size-baseline',
    style: { fontSize: 12, fontWeight: 700 },
  },
  {
    name: 'Baseline Medium',
    size: '12px',
    weight: 'Medium (500)',
    token: '--font-size-baseline',
    style: { fontSize: 12, fontWeight: 500 },
  },
  {
    name: 'Baseline',
    size: '12px',
    weight: 'Regular (400)',
    token: '--font-size-baseline',
    style: { fontSize: 12, fontWeight: 400 },
  },
  {
    name: 'Caption',
    size: '10px',
    weight: 'Medium (500)',
    token: '--font-size-caption',
    style: { fontSize: 10, fontWeight: 500 },
  },
] as const

function Typography() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Fonts &amp; Hierarchy</h1>
      <p className={styles.subtitle}>
        Noto Sans is the sole typeface. Three weights — Regular (400), Medium
        (500), and Bold (700) — cover the full hierarchy from large headers down
        to captions.
      </p>

      <h2 className={styles.sectionTitle}>Font Family</h2>
      <p style={{ fontFamily: 'var(--font-family)', fontSize: 14, color: '#404040' }}>
        <strong>Noto Sans</strong> &mdash; <code style={{ fontSize: 12, color: '#949494' }}>--font-family: 'Noto Sans', sans-serif</code>
      </p>

      <h2 className={styles.sectionTitle}>Type Scale</h2>
      <table className={styles.typeTable}>
        <thead>
          <tr>
            <th style={{ width: 140 }}>Name</th>
            <th style={{ width: 100 }}>Size / Weight</th>
            <th>Sample</th>
            <th style={{ width: 180 }}>Token</th>
          </tr>
        </thead>
        <tbody>
          {HIERARCHY.map((h) => (
            <tr key={h.name}>
              <td>
                <strong>{h.name}</strong>
              </td>
              <td className={styles.typeMeta}>
                {h.size}
                <br />
                {h.weight}
              </td>
              <td
                style={{
                  fontFamily: 'var(--font-family)',
                  ...h.style,
                  color: '#202020',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </td>
              <td className={styles.typeMeta}>{h.token}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className={styles.sectionTitle}>Weights</h2>
      <table className={styles.typeTable}>
        <thead>
          <tr>
            <th>Weight</th>
            <th>Value</th>
            <th>Token</th>
            <th>Sample (14px)</th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Regular', value: 400, token: '--font-weight-regular' },
            { name: 'Medium', value: 500, token: '--font-weight-medium' },
            { name: 'Bold', value: 700, token: '--font-weight-bold' },
          ].map((w) => (
            <tr key={w.name}>
              <td><strong>{w.name}</strong></td>
              <td className={styles.typeMeta}>{w.value}</td>
              <td className={styles.typeMeta}>{w.token}</td>
              <td style={{ fontFamily: 'var(--font-family)', fontSize: 14, fontWeight: w.value }}>
                The quick brown fox jumps over the lazy dog
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta: Meta = {
  title: 'Sub Atomic/Fonts & Hierarchy',
  component: Typography,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
