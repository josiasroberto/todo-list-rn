import styled, { css } from 'styled-components/native'

interface TitleProps {
  type: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLOR.BLUE : theme.COLOR.PURPLE};
  `}
`
export const Quantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLOR.GRAY_200};
    background-color: ${theme.COLOR.GRAY_400};
    padding: 2px 8px;
    border-radius: 999px;
  `}
`

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`
