import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

interface TaskStyleProps {
  isChecked: boolean
}

export const Container = styled.View<TaskStyleProps>`
  ${({ theme, isChecked }) => css`
    background-color: ${theme.COLOR.GRAY_500};
    border-radius: 8px;
    border: 1px solid ${isChecked ? theme.COLOR.GRAY_500 : theme.COLOR.GRAY_400};
  `}

  margin-bottom: 8px;
  flex-direction: row;
  padding: 12px 8px 12px 12px;
  align-items: center;
  gap: 8px;
`

export const CheckButton = styled(TouchableOpacity)<TaskStyleProps>`
  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.COLOR.GRAY_100 : 'transparent'};
  border-radius: 999px;
  width: 24px;
  height: 24px;
`
export const TaskText = styled.Text<TaskStyleProps>`
  ${({ theme, isChecked }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${isChecked ? theme.COLOR.GRAY_300 : theme.COLOR.GRAY_100};

    text-decoration-line: ${isChecked && 'line-through'};
  `}
  flex: 1;
`

export const TrashButton = styled(TouchableOpacity)`
  padding: 9px 10px;
`
