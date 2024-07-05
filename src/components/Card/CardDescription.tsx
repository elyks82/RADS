import React from 'react'
import { DescriptionContainer } from './Card.styled'

interface DescriptionProps {
  description: string
}

const Description: React.FC<DescriptionProps> = ({ description }) => {
  return <DescriptionContainer>{description}</DescriptionContainer>
}

export default Description
