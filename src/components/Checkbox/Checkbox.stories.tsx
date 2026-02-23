import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    label: 'I agree',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
}

export const WithoutLabel: Story = {
  args: {},
}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
  ),
}
