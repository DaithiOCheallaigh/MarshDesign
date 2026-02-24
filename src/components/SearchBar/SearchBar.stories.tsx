import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    placeholder: 'Search…',
  },
}

export const WithValue: Story = {
  args: {
    placeholder: 'Search…',
    defaultValue: 'Aviation',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Search…',
    disabled: true,
  },
}

export const TableSearch: Story = {
  args: {
    placeholder: 'Search table…',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 295 }}>
        <Story />
      </div>
    ),
  ],
}
