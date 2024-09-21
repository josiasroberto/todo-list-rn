import styled from 'styled-components/native'

export const Container = styled.View`
  top: 0%;
  padding: 40px 0 71px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_700};
  align-items: center;
`

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`
