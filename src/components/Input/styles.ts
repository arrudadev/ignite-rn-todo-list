import { StyleSheet } from 'react-native'
import { tokens } from '@/styles/tokens'

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: tokens.colors.gray[500],
    borderColor: tokens.colors.gray[700],
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: 'solid',
    color: tokens.colors.gray[100],
  },
  focused: {
    borderColor: tokens.colors.purple[600],
  },
})
