import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_600};
`
export const HighLight = styled(Text)`
  color: white;
`
