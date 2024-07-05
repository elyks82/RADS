import React from 'react'
import { ButtonGroupProps } from './types'
import { StyledButtonGroup } from './ButtonGroup.styled'
import useNib from '../../utils/useNib'

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const { children, nib: propNib, ...restProps } = props
    let { variant } = props

    //Default variant for ButtonGroup is vertical
    variant = variant || 'vertical'
    const { nib } = useNib(propNib)

    //TODO: Implement horizontal variant through a guard rendering clause. Last one is the default (vertical)

    return (
      <StyledButtonGroup
        data-apebrush-component="ButtonGroup"
        ref={ref}
        nib={nib}
        variant={variant}
        {...restProps}
      >
        {children}
      </StyledButtonGroup>
    )
  },
)

ButtonGroup.displayName = 'ButtonGroup'
export default ButtonGroup
