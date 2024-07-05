import React from 'react'
import { HeaderContainer } from './Card.styled'

interface HeaderProps {
  header: string
}
const CardHeader: React.FC<HeaderProps> = ({ header }) => (
  <HeaderContainer>{header}</HeaderContainer>
)

export default CardHeader
