import { TextInput } from 'react-native'
import { styles } from './styles'
import { tokens } from '@/styles/tokens'
import { useState } from 'react'

type InputProps = {
  placeholder: string
  value?: string
  onChangeText?: (text: string) => void
}

export function Input({ placeholder, value, onChangeText }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const inputStyles: any = [styles.input]

  if (isFocused) {
    inputStyles.push(styles.focused)
  }

  return (
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      placeholderTextColor={tokens.colors.gray[300]}
      value={value}
      onChangeText={onChangeText}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}
