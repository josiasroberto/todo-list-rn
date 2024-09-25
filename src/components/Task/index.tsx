import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import * as S from './styles'

import { useTheme } from 'styled-components/native'
import { TaskStorageDTO } from '@components/storage/task/TaskStorageDTO'

interface TaskProps {
  task: TaskStorageDTO
  onCompleteTask: () => void
  onDelete: () => void
}

export function Task({ task, onCompleteTask, onDelete }: TaskProps) {
  const { COLOR } = useTheme()

  return (
    <S.Container isCompleted={task.isCompleted}>
      <S.CheckButton
        isCompleted={task.isCompleted}
        onPress={() => onCompleteTask()}
      >
        {task.isCompleted ? (
          <AntDesign name="checkcircle" size={24} color={COLOR.PURPLE_DARK} />
        ) : (
          <Entypo name="circle" size={24} color={COLOR.BLUE} />
        )}
      </S.CheckButton>

      <S.TaskText isCompleted={task.isCompleted}>{task.name}</S.TaskText>

      <S.TrashButton onPress={() => onDelete()}>
        <Feather name="trash-2" size={24} color={COLOR.GRAY_300} />
      </S.TrashButton>
    </S.Container>
  )
}
