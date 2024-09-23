import styled from 'styled-components/native'

interface HighLightProps {
  type: 'TITLE' | 'SUBTITLE'
}

export const Container = styled.View`
  margin-top: 20px;
`
export const Line = styled.View`
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.COLOR.GRAY_400};
`
export const HighLight = styled.Text<HighLightProps>`
  color: ${({ theme }) => theme.COLOR.GRAY_300};
  font-size: 14px;
  font-family: ${({ theme, type }) =>
    type === 'TITLE' ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
`
export const Icon = styled.Image`
  margin-bottom: 16px;
  width: 56px;
  height: 56px;
`

export const Wrapper = styled.View`
  padding: 48px 20px;
  align-items: center;
`
