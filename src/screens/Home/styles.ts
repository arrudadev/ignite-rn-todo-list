import { StyleSheet } from 'react-native'
import { tokens } from '@/styles/tokens'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: tokens.colors.gray[600],
  },
  container: {
    paddingHorizontal: 24,
  },
  form: {
    marginTop: -32,
    flexDirection: 'row',
    alignContent: 'center',
    gap: 4,
  },
})
