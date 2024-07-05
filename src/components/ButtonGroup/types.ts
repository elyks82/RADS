import { Button } from '../Button'
import { Nib } from '../../types'

export interface ButtonGroupProps {
  children:
    | React.ReactElement<typeof Button>
    | React.ReactElement<typeof Button>[]
  variant?: 'vertical'
  nib?: Nib
}
