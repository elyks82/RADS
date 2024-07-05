import React from 'react'
import { ThumbnailContainer } from './Card.styled'

interface ThumbnailProps {
  src: string
  alt?: string
}

const CardThumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt = 'Thumbnail',
}) => (
  <ThumbnailContainer>
    <img src={src} alt={alt} />
  </ThumbnailContainer>
)

export default CardThumbnail
