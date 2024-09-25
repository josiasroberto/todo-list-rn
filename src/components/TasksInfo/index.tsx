import { TaskStorageDTO } from '@components/storage/task/TaskStorageDTO'
import { Container, Quantity, Title, Wrapper } from './styles'
import React from 'react'

interface TasksInfoProps {
  tasks: TaskStorageDTO[]
}

export function TasksInfo({ tasks }: TasksInfoProps) {
  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(
    (task) => task.isCompleted === true,
  ).length
  return (
    <Container>
      <Wrapper>
        <Title type="PRIMARY">Criadas</Title>
        <Quantity>{tasksQuantity}</Quantity>
      </Wrapper>
      <Wrapper>
        <Title type="SECONDARY">Concluídas</Title>
        <Quantity>{completedTasks + ' de ' + tasksQuantity}</Quantity>
      </Wrapper>
    </Container>
  )
}
