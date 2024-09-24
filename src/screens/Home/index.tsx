import { Header } from '@components/Header'
import * as S from './styles'
import React, { useEffect, useState } from 'react'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'
import { TasksInfo } from '@components/TasksInfo'
import { EmptyTaskList } from '@components/EmptyTaskList'
import { Task } from '@components/Task'
import { Alert, FlatList } from 'react-native'
import { TaskStorageDTO } from '@components/storage/task/TaskStorageDTO'
import { taskCreate } from '@components/storage/task/taskCreate'
import { tasksGetAll } from '@components/storage/task/tasksGetAll'

export function Home() {
  const [tasks, setTasks] = useState<TaskStorageDTO[]>([])
  const [newTaskName, setNewTaskName] = useState('')

  async function handleAddTask() {
    if (newTaskName.trim().length === 0) {
      return Alert.alert(
        'Nova Tarefa',
        'O nome da tarefa não pode estar vazio.',
      )
    }
    const newTask: TaskStorageDTO = {
      name: newTaskName.trimStart().trimEnd(),
      isChecked: false,
    }
    try {
      await taskCreate(newTask)
      setNewTaskName('')
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao adicionar a tarefa.')
      console.log(error)
      setNewTaskName('')
    }
  }

  async function fetchTasks() {
    try {
      const data = await tasksGetAll()
      setTasks(data)
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao buscar as tarefas.')
      console.log(error)
      setTasks([])
    }
  }
  useEffect(() => {
    fetchTasks()
  }, [tasks])

  return (
    <S.Container>
      <Header />
      <S.List>
        <S.InputArea>
          <Input
            placeholder="Adicione uma nova tarefa"
            onChangeText={setNewTaskName}
            value={newTaskName}
            onSubmitEditing={handleAddTask}
          />
          <AddButton onPress={handleAddTask} />
        </S.InputArea>

        <TasksInfo />

        <FlatList
          data={tasks}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <Task task={item.name} />}
          ListEmptyComponent={() => <EmptyTaskList />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }]}
        />
      </S.List>
    </S.Container>
  )
}
