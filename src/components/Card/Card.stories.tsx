import { Meta, StoryObj } from '@storybook/react'
import Card from './Card'
import CardThumbnail from './CardThumbnail'
import CardHeader from './CardHeader'
import CardDescription from './CardDescription'
import CardFooter from './CardFooter'

const meta = {
  title: 'Apebrush/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: 'The width of the Card',
      control: {
        type: 'number',
      },
    },
  },
} as Meta

export default meta

type Story = StoryObj<typeof Card>

export const Nude: Story = {
  args: {
    width: 700,
  },
  render: args => (
    <Card {...args}>
      <CardThumbnail src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" />
      <CardHeader header="Lorem Ipsum" />
      <CardDescription description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum." />
      <CardFooter children="Lorem ipsum" />
    </Card>
  ),
}
