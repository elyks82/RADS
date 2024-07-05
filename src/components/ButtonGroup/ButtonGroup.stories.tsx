import type { Meta, StoryObj } from '@storybook/react'

import { ButtonGroup } from '.'
import { Button } from '../Button'

const meta = {
  title: 'Apebrush/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'fullscreen centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Vertical or horizontal layout',
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal'],
      },
    },
  },
} as Meta

export default meta

type Story = StoryObj<typeof ButtonGroup>

export const Nude: Story = {
  args: {
    children: [
      <Button key="1">Lorem</Button>,
      <Button key="2">Ipsum</Button>,
      <Button key="3">Dolor amet</Button>,
    ],
    variant: 'vertical',
  },
}
