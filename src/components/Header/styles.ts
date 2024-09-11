import { StyleSheet } from 'react-native'
import { tokens } from '@/styles/tokens'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 180,
    backgroundColor: tokens.colors.gray[700],
  },
})
