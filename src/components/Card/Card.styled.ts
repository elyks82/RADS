import styled, { css } from 'styled-components'
import { CardProps } from './types'
import { WithNib } from '../../types'

export const StyledCard = styled.div<WithNib<CardProps>>`
  ${({ theme, nib, width }) => css`
    width: ${`${width}px`};
    background-color: ${theme.palette.card.background[nib]};
    color: ${theme.palette.card.text[nib]};
    border: 1px solid ${theme.palette.card.border.color};
    border-radius: ${theme.radius['base-10']};
    overflow: hidden;
  `}
`

export const ThumbnailContainer = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }
`

export const HeaderContainer = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.space['base-4']} 0 0 ${theme.space['base-8']};
      font: ${theme.typography.card.header.text};
    `
  }}
`

export const DescriptionContainer = styled.div`
  ${({ theme }) => {
    return css`
      padding: ${theme.space['base-1']} ${theme.space['base-8']}
        ${theme.space['base-20']} ${theme.space['base-8']};
      font: ${theme.typography.card.description.text};
    `
  }}
`

export const FooterContainer = styled.div`
  ${({ theme }) => {
    return css`
      padding: 0 ${theme.space['base-4']} ${theme.space['base-4']}
        ${theme.space['base-4']};
      button {
        display: flex;
        justify-content: start;
      }
    `
  }}
`
