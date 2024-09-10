import { StyleSheet } from 'react-native'
import { tokens } from '@/styles/tokens'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: tokens.fonts.sizes.lg,
    fontFamily: tokens.fonts.font.bold,
  },
})
