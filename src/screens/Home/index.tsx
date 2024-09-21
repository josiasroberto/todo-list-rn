import { Header } from '@components/Header'
import { Container, HighLight, List } from './styles'
import React from 'react'

export function Home() {
  return (
    <Container>
      <Header />
      <List>
        <HighLight>Todo List</HighLight>
      </List>
    </Container>
  )
}
