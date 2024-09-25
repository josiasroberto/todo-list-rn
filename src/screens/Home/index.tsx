import React, { useEffect, useRef, useState } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import uuid from 'react-native-uuid'

import * as S from './styles'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { AddButton } from '@components/AddButton'
import { TasksInfo } from '@components/TasksInfo'
import { EmptyTaskList } from '@components/EmptyTaskList'
import { Task } from '@components/Task'

import { TaskStorageDTO } from '@components/storage/task/TaskStorageDTO'
import { taskCreate } from '@components/storage/task/taskCreate'
import { tasksGetAll } from '@components/storage/task/tasksGetAll'
import { taskRemove } from '@components/storage/task/taskRemove'

export function Home() {
  const [tasks, setTasks] = useState<TaskStorageDTO[]>([])
  const [newTaskName, setNewTaskName] = useState('')

  const newTaskNameInputRef = useRef<TextInput>(null)

  async function handleAddTask() {
    if (newTaskName.trim().length === 0) {
      return Alert.alert(
        'Nova Tarefa',
        'O nome da tarefa não pode estar vazio.',
      )
    }
    const newTask: TaskStorageDTO = {
      id: String(uuid.v4()),
      name: newTaskName.trimStart().trimEnd(),
      isChecked: false,
    }
    try {
      await taskCreate(newTask)
      newTaskNameInputRef.current?.blur()
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

  async function deleteTask(id: string) {
    try {
      await taskRemove(id)
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao remover a tarefa.')
      console.log(error)
    }
  }

  async function handleDeleteTask(id: string) {
    Alert.alert('Remover', 'Deseja remover a turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => deleteTask(id) },
    ])
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
            inputRef={newTaskNameInputRef}
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
          renderItem={({ item }) => (
            <Task task={item} onDelete={() => handleDeleteTask(item.id)} />
          )}
          ListEmptyComponent={() => <EmptyTaskList />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ paddingBottom: 100 }]}
        />
      </S.List>
    </S.Container>
  )
}
