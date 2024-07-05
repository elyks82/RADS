import React from 'react'
import { Button } from '../Button'
import { FooterContainer } from './Card.styled'

interface CardFooterProps {
  children?: React.ReactNode
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return (
    <FooterContainer>
      <Button isStretched={true}>{children}</Button>
    </FooterContainer>
  )
}

export default CardFooter
