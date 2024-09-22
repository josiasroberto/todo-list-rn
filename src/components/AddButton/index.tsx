import { useTheme } from 'styled-components/native'
import { Container } from './styles'

import AntDesign from '@expo/vector-icons/AntDesign'

export function AddButton() {
  const { COLOR } = useTheme()
  return (
    <Container>
      <AntDesign name="pluscircleo" size={18} color={COLOR.GRAY_100} />
    </Container>
  )
}
