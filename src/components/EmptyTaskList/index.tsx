import React from 'react'
import { Container, HighLight, Icon, Line, Wrapper } from './styles'

import clipboardImg from '@assets/clipboard/clipboard.png'

export function EmptyTaskList() {
  return (
    <Container>
      <Line />

      <Wrapper>
        <Icon source={clipboardImg} />
        <HighLight type="TITLE">
          Você ainda não tem tarefas cadastradas
        </HighLight>
        <HighLight type="SUBTITLE">
          Crie tarefas e organize seus itens a fazer
        </HighLight>
      </Wrapper>
    </Container>
  )
}
