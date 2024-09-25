import AsyncStorage from '@react-native-async-storage/async-storage'
import { TASK_COLLECTION } from '../storageConfig'
import { tasksGetAll } from './tasksGetAll'

export async function taskRemove(id: string) {
  try {
    const storage = await tasksGetAll()
    const updatedTasks = storage.filter((task) => task.id !== id)
    const tasks = JSON.stringify(updatedTasks)
    await AsyncStorage.setItem(`${TASK_COLLECTION}`, tasks)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to remove task')
  }
}
