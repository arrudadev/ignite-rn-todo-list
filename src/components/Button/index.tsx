import { TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { ReactNode } from 'react'

type ButtonProps = {
  onPress: () => void
  variant: 'primary' | 'secondary'
  size: 'large' | 'small'
  children: ReactNode
}

export function Button({ onPress, variant, size, children }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], styles[size]]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}
