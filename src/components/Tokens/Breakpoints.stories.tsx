import type { Meta, StoryObj } from '@storybook/react'
import styles from './Tokens.module.css'

const BREAKPOINTS = [
  { name: 'Mobile S', token: '--breakpoint-mobile-sm', px: 360, columns: 4, gutter: 16, margin: 16, device: 'Small phones' },
  { name: 'Mobile M', token: '--breakpoint-mobile-md', px: 400, columns: 4, gutter: 16, margin: 16, device: 'Standard phones' },
  { name: 'Mobile L', token: '--breakpoint-mobile-lg', px: 480, columns: 4, gutter: 16, margin: 16, device: 'Large phones' },
  { name: 'Tablet S', token: '--breakpoint-tablet-sm', px: 600, columns: 8, gutter: 24, margin: 24, device: 'Small tablets (portrait)' },
  { name: 'Tablet M', token: '--breakpoint-tablet-md', px: 720, columns: 8, gutter: 24, margin: 24, device: 'Standard tablets' },
  { name: 'Tablet L', token: '--breakpoint-tablet-lg', px: 840, columns: 12, gutter: 24, margin: 24, device: 'Large tablets (landscape)' },
  { name: 'Desktop S', token: '--breakpoint-desktop-sm', px: 960, columns: 12, gutter: 24, margin: 24, device: 'Small desktops' },
  { name: 'Desktop M', token: '--breakpoint-desktop-md', px: 1024, columns: 12, gutter: 24, margin: 24, device: 'Standard desktops' },
  { name: 'Desktop L', token: '--breakpoint-desktop-lg', px: 1280, columns: 12, gutter: 24, margin: 24, device: 'Wide desktops' },
  { name: 'Desktop XL', token: '--breakpoint-desktop-xl', px: 1440, columns: 12, gutter: 24, margin: 24, device: 'Ultrawide' },
] as const

const MAX_BAR = 1440

function Breakpoints() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Breakpoints</h1>
      <p className={styles.subtitle}>
        Column and width specifications for different screens, devices, and
        orientations. The smallest width in either orientation is the defining
        value.
      </p>

      <h2 className={styles.sectionTitle}>Breakpoint Grid</h2>

      <table className={styles.breakpointTable}>
        <thead>
          <tr>
            <th style={{ width: 100 }}>Name</th>
            <th style={{ width: 60 }}>Width</th>
            <th style={{ width: 50 }}>Cols</th>
            <th style={{ width: 55 }}>Gutter</th>
            <th style={{ width: 55 }}>Margin</th>
            <th>Visual</th>
            <th style={{ width: 140 }}>Device</th>
          </tr>
        </thead>
        <tbody>
          {BREAKPOINTS.map((b) => (
            <tr key={b.name}>
              <td><strong>{b.name}</strong></td>
              <td>{b.px}px</td>
              <td>{b.columns}</td>
              <td>{b.gutter}px</td>
              <td>{b.margin}px</td>
              <td>
                <div
                  className={styles.bpBar}
                  style={{ width: `${(b.px / MAX_BAR) * 100}%`, minWidth: 4 }}
                />
              </td>
              <td style={{ fontSize: 12, color: 'var(--color-gray-500)' }}>{b.device}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className={styles.sectionTitle}>CSS Tokens</h2>
      <table className={styles.breakpointTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {BREAKPOINTS.map((b) => (
            <tr key={b.token}>
              <td><strong>{b.name}</strong></td>
              <td className={styles.bpToken}>{b.token}</td>
              <td className={styles.bpToken}>{b.px}px</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.note}>
        <strong>Notes:</strong>
        <br />* 16dp base when the smallest device width is &lt;600.
        <br />** Desktop breakpoints are 16dp below the listed values to
        accommodate variations in browser chrome.
      </div>
    </div>
  )
}

const meta: Meta = {
  title: 'Sub Atomic/Breakpoints',
  component: Breakpoints,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
