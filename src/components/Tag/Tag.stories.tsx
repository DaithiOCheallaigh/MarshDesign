import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onRemove: { action: 'removed' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    label: 'Aviation',
  },
}

export const Removable: Story = {
  args: {
    label: 'Aviation',
    onRemove: () => {},
  },
}

export const Disabled: Story = {
  args: {
    label: 'Aviation',
    onRemove: () => {},
    disabled: true,
  },
}

export const MultipleTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag label="Aviation" onRemove={() => {}} />
      <Tag label="Marine" onRemove={() => {}} />
      <Tag label="Property" onRemove={() => {}} />
      <Tag label="Casualty" onRemove={() => {}} />
    </div>
  ),
}
