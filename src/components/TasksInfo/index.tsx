import { Container, Quantity, Title, Wrapper } from './styles'
import React from 'react'

export function TasksInfo() {
  return (
    <Container>
      <Wrapper>
        <Title type="PRIMARY">Criadas</Title>
        <Quantity>10</Quantity>
      </Wrapper>
      <Wrapper>
        <Title type="SECONDARY">Concluídas</Title>
        <Quantity>0 de 10</Quantity>
      </Wrapper>
    </Container>
  )
}
