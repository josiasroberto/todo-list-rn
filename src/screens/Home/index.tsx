import { Header } from '@components/Header'
import * as S from './styles'
import React, { useState } from 'react'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'
import { TasksInfo } from '@components/TasksInfo'
import { EmptyTaskList } from '@components/EmptyTaskList'
import { Task } from '@components/Task'
import { FlatList } from 'react-native'

export function Home() {
  const [tasks, setTasks] = useState(['a', 'b', 'c'])
  return (
    <S.Container>
      <Header />
      <S.List>
        <S.InputArea>
          <Input placeholder="Adicione uma nova tarefa" />
          <AddButton />
        </S.InputArea>

        <TasksInfo />

        <FlatList
          data={tasks}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <Task task={item} />}
          ListEmptyComponent={() => <EmptyTaskList />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }]}
        />
      </S.List>
    </S.Container>
  )
}
