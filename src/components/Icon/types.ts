export interface IconProps {
  name: string
  width?: number
  height?: number
  variant?: 'white' | 'black' | 'primary' //Different than 'nib' to handle edge cases where nib might be for example black, but we need the icon to be black. Variant is more suitable for this.
}
