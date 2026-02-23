import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters',
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Read only field',
    value: 'Cannot edit this',
    disabled: true,
  },
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
      </svg>
    ),
  },
}
