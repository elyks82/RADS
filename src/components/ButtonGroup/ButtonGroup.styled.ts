import styled, { css } from 'styled-components'
import { Group as AriaGroup } from 'react-aria-components'
import { ButtonGroupProps } from './types'
import { WithNib } from '../../types'

export const StyledButtonGroup = styled(AriaGroup)<WithNib<ButtonGroupProps>>`
  ${({ theme, nib }) => {
    return css`
      transition: ${theme.timing.fast};
      background-color: ${theme.palette.neutral[nib][200]};
      display: flex;
      flex-direction: row;
      width: fit-content;
      gap: ${theme.space['base-1']};
      padding: ${theme.space['base-1']};
      border-radius: ${theme.radius['base-8']};

      & > [data-apebrush-component='Button'] {
        border-radius: ${theme.radius['base-2']};
      }

      & > [data-apebrush-component='Button']:first-child {
        border-top-left-radius: ${theme.radius['base-8']};
        border-bottom-left-radius: ${theme.radius['base-8']};
      }

      & > [data-apebrush-component='Button']:last-child {
        border-top-right-radius: ${theme.radius['base-8']};
        border-bottom-right-radius: ${theme.radius['base-8']};
      }
    `
  }}
`
