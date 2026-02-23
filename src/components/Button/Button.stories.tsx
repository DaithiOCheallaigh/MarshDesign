import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'danger', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
}

export const Danger: Story = {
  args: {
    children: 'Remove from Team',
    variant: 'danger',
    size: 'medium',
  },
}

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    children: 'Small',
    variant: 'primary',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    children: 'Large',
    variant: 'primary',
    size: 'large',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'medium',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 2v12h12V4.828L11.172 2H2zm1 1h7v3H3V3zm8 0h.172L13 4.828V13H3V7h10V6H3V3z" />
      </svg>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="primary" size="small">Small</Button>
        <Button variant="primary" size="medium">Medium</Button>
        <Button variant="primary" size="large">Large</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="danger" size="small">Remove</Button>
        <Button variant="danger" size="medium">Remove from Team</Button>
        <Button variant="danger" size="large">Remove</Button>
      </div>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button variant="outline" size="small">Cancel</Button>
        <Button variant="outline" size="medium">Cancel</Button>
        <Button variant="outline" size="large">Cancel</Button>
      </div>
    </div>
  ),
}
