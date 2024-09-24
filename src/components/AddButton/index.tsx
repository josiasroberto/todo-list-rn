import { useTheme } from 'styled-components/native'
import { Container } from './styles'

import AntDesign from '@expo/vector-icons/AntDesign'
import { TouchableOpacityProps } from 'react-native'

export function AddButton({ ...rest }: TouchableOpacityProps) {
  const { COLOR } = useTheme()
  return (
    <Container {...rest}>
      <AntDesign name="pluscircleo" size={18} color={COLOR.GRAY_100} />
    </Container>
  )
}
