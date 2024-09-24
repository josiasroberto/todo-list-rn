import AsyncStorage from '@react-native-async-storage/async-storage'
import { TaskStorageDTO } from './TaskStorageDTO'
import { TASK_COLLECTION } from '../storageConfig'
import { tasksGetAll } from './tasksGetAll'

export async function taskCreate(newTask: TaskStorageDTO) {
  try {
    const storedTasks = await tasksGetAll()

    const storage = JSON.stringify([...storedTasks, newTask])

    await AsyncStorage.setItem(`${TASK_COLLECTION}`, storage)
  } catch (error) {
    console.log(error)
    throw new Error('Failed to create task')
  }
}
