import React from 'react'
import { IconProps } from './types'
import Icons from './Icons'
import theme from '../../designToken'

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, variant, width, height }, ref) => {
    const variantMappings = {
      white: theme.palette.neutral.light[0],
      black: theme.palette.neutral.light[1000],
      primary: theme.palette.green.light[600],
    }

    return (
      <div style={{ width, height }}>
        {Icons[name]
          ? React.cloneElement(
              Icons[name]!(
                variantMappings[variant ?? 'black'],
              ) as React.ReactElement,
              {
                width,
                height,
                ref,
              },
            )
          : null}
      </div>
    )
  },
)

Icon.displayName = 'Icon'
export default Icon
