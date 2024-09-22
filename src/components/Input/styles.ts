import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

interface Props {
  isFocused: boolean
}

export const Container = styled(TextInput).attrs<Props>(({ theme }) => ({
  placeholderTextColor: theme.COLOR.GRAY_300,
  returnKeyType: 'done',
  autoCorrect: false,
  cursorColor: theme.COLOR.GRAY_100,
}))`
  ${({ theme, isFocused }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid;
    border-color: ${isFocused ? theme.COLOR.PURPLE_DARK : theme.COLOR.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLOR.GRAY_100};
    background-color: ${theme.COLOR.GRAY_500};
  `}

  border-radius: 8px;
  padding: 16px;
`
