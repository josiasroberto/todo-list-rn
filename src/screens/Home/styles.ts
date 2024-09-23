import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.GRAY_600};
`
export const List = styled.View`
  padding: 0 24px 24px;
  margin-top: -27px;
  width: 100%;
  justify-content: center;
  flex: 1;
`
export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`
