import AsyncStorage from '@react-native-async-storage/async-storage'
import { TASK_COLLECTION } from '../storageConfig'
import { TaskStorageDTO } from './TaskStorageDTO'

export async function tasksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION)

    const tasks: TaskStorageDTO[] = storage ? JSON.parse(storage) : []

    return tasks
  } catch (error) {
    console.log(error)
    throw new Error('Failed to get tasks')
  }
}
