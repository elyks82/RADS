import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '.'
import Icons from './Icons'

const meta = {
  title: 'Apebrush/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      options: Object.keys(Icons),
      control: { type: 'select' }, // Automatically inferred when 'options' is define
      defaultValue: 'Discord',
    },
    width: {
      description: 'The width of the Icon',
      control: {
        type: 'number',
      },
    },
    height: {
      description: 'The height of the Icon',
      control: {
        type: 'number',
      },
    },
    variant: {
      description: 'The color of the Icon',
      options: ['white', 'black', 'primary'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta

export default meta

type Story = StoryObj<typeof Icon>

export const Nude: Story = {
  args: {
    name: 'Discord',
    width: 64,
    height: 64,
    variant: 'black',
  },
}
