import type { Meta, StoryObj } from '@storybook/react'
import styles from './Tokens.module.css'

interface Swatch {
  name: string
  hex: string
  token: string
}

const PRIMARY: Swatch[] = [
  { name: 'Dark Blue', hex: '#002C77', token: '--color-dark-blue' },
  { name: 'Teal', hex: '#0077A0', token: '--color-teal' },
  { name: 'Blue', hex: '#009DE0', token: '--color-blue' },
  { name: 'Turquoise', hex: '#00968F', token: '--color-turquoise' },
  { name: 'Light Blue', hex: '#76D3FF', token: '--color-light-blue' },
]

const SEMANTIC: Swatch[] = [
  { name: 'Success', hex: '#14853D', token: '--color-success' },
  { name: 'Green', hex: '#00AC41', token: '--color-success-alt' },
  { name: 'Danger', hex: '#C53532', token: '--color-danger' },
  { name: 'Warning', hex: '#FFBE00', token: '--color-warning' },
  { name: 'Hyperlink', hex: '#2C6EF2', token: '--color-hyperlink' },
]

const NEUTRALS: Swatch[] = [
  { name: 'Black', hex: '#202020', token: '--color-black' },
  { name: 'Gray 900', hex: '#404040', token: '--color-gray-900' },
  { name: 'Gray 500', hex: '#949494', token: '--color-gray-500' },
  { name: 'Blue Gray', hex: '#8096B2', token: '--color-blue-gray' },
  { name: 'Gray 100', hex: '#F0F0F0', token: '--color-gray-100' },
  { name: 'Gray 50', hex: '#F4F8FF', token: '--color-gray-50' },
  { name: 'White', hex: '#FFFFFF', token: '--color-white' },
]

const TINTS: Swatch[] = [
  { name: 'Blue Tint', hex: '#E7EFFE', token: '--color-blue-tint' },
  { name: 'Green Tint', hex: '#E3FFE4', token: '--color-green-tint' },
  { name: 'Orange Tint', hex: '#FFEDDD', token: '--color-orange-tint' },
  { name: 'Red Tint', hex: '#FFE4E3', token: '--color-red-tint' },
  { name: 'Orange', hex: '#FF7A00', token: '--color-orange' },
]

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className={styles.swatchGrid}>
      {swatches.map((s) => (
        <div key={s.token} className={styles.swatch}>
          <div
            className={styles.swatchColor}
            style={{
              backgroundColor: s.hex,
              border: s.hex === '#FFFFFF' ? '1px solid #F0F0F0' : undefined,
            }}
          />
          <div className={styles.swatchInfo}>
            <p className={styles.swatchName}>{s.name}</p>
            <p className={styles.swatchValue}>{s.hex}</p>
            <p className={styles.swatchToken}>{s.token}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Colours() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Colours</h1>
      <p className={styles.subtitle}>
        23 design tokens organised into primary brand colours, semantic
        indicators, neutrals, and tints.
      </p>

      <h2 className={styles.sectionTitle}>Primary</h2>
      <SwatchGrid swatches={PRIMARY} />

      <h2 className={styles.sectionTitle}>Semantic</h2>
      <SwatchGrid swatches={SEMANTIC} />

      <h2 className={styles.sectionTitle}>Neutrals</h2>
      <SwatchGrid swatches={NEUTRALS} />

      <h2 className={styles.sectionTitle}>Tints</h2>
      <SwatchGrid swatches={TINTS} />
    </div>
  )
}

const meta: Meta = {
  title: 'Sub Atomic/Colours',
  component: Colours,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
