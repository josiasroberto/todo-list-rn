import AsyncStorage from '@react-native-async-storage/async-storage'
import { tasksGetAll } from './tasksGetAll'
import { TASK_COLLECTION } from '../storageConfig'

export async function taskUpdateStatus(id: string) {
  try {
    const storage = await tasksGetAll()

    const updatedTasks = storage.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })

    await AsyncStorage.setItem(
      `${TASK_COLLECTION}`,
      JSON.stringify(updatedTasks),
    )
  } catch (error) {
    console.error('Failed to update task status', error)
    throw new Error('Failed to update task status')
  }
}
