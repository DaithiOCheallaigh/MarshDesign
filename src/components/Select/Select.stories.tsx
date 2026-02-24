import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const assetOptions = [
  { label: 'All Assets', value: 'all' },
  { label: 'Aviation', value: 'aviation' },
  { label: 'Marine', value: 'marine' },
  { label: 'Property', value: 'property' },
  { label: 'Casualty', value: 'casualty' },
  { label: 'Cyber', value: 'cyber' },
]

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'select', options: assetOptions.map((o) => o.value) },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: 320, paddingBottom: 200 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    options: assetOptions,
    placeholder: 'Please select',
  },
}

export const WithSelection: Story = {
  args: {
    options: assetOptions,
    value: 'aviation',
  },
}

export const Disabled: Story = {
  args: {
    options: assetOptions,
    placeholder: 'Please select',
    disabled: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Select options={assetOptions} value={value} onChange={setValue} placeholder="Filter by asset type" />
        {value && <p style={{ fontSize: 12, color: '#002c77' }}>Selected: {value}</p>}
      </div>
    )
  },
}
