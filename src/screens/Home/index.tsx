import { Header } from '@components/Header'
import * as S from './styles'
import React from 'react'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'

export function Home() {
  return (
    <S.Container>
      <Header />
      <S.List>
        <S.InputArea>
          <Input placeholder="Adicione uma nova tarefa" />
          <AddButton />
        </S.InputArea>
        {/* <S.HighLight>Todo List</S.HighLight> */}
      </S.List>
    </S.Container>
  )
}
