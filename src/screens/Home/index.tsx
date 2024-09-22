import { Header } from '@components/Header'
import * as S from './styles'
import React from 'react'
import { Input } from '@components/Input'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.List>
        <Input placeholder="Adicione uma nova tarefa" />
        {/* <S.HighLight>Todo List</S.HighLight> */}
      </S.List>
    </S.Container>
  )
}
