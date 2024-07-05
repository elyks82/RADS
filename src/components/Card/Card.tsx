import React from 'react'
import { CardProps } from './types'
import useNib from '../../utils/useNib'
import { StyledCard } from './Card.styled'

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { width, children, nib: propNib, ...restProps } = props
  const { nib } = useNib(propNib)

  return (
    <StyledCard ref={ref} width={width} nib={nib} {...restProps}>
      {children}
    </StyledCard>
  )
})

Card.displayName = 'Card'
export default Card
