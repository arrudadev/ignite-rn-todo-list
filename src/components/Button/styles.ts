import { tokens } from '@/styles/tokens'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  primary: {
    backgroundColor: tokens.colors.blue[600],
  },
  secondary: {
    backgroundColor: tokens.colors.gray[500],
  },
  large: {
    width: 52,
    height: 52,
    padding: 18,
  },
  small: {
    width: 32,
    height: 32,
    padding: 9,
  },
})
