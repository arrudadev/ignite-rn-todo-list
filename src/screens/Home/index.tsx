import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { MaterialIcons } from '@expo/vector-icons'

export function Home() {
  return (
    <View style={styles.wrapper}>
      <Header />

      <View style={styles.container}>
        <View style={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />

          <Button variant="primary" size="large" onPress={() => {}}>
            <MaterialIcons name="add-circle-outline" size={16} color="white" />
          </Button>
        </View>
      </View>
    </View>
  )
}
