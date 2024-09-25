import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import * as S from './styles'

import { useTheme } from 'styled-components/native'
import { TaskStorageDTO } from '@components/storage/task/TaskStorageDTO'

interface TaskProps {
  task: TaskStorageDTO
  onChangeCheck: () => void
  onDelete: () => void
}

export function Task({ task, onChangeCheck, onDelete }: TaskProps) {
  const { COLOR } = useTheme()

  return (
    <S.Container isChecked={task.isChecked}>
      <S.CheckButton isChecked={task.isChecked} onPress={() => onChangeCheck()}>
        {task.isChecked ? (
          <AntDesign name="checkcircle" size={24} color={COLOR.PURPLE_DARK} />
        ) : (
          <Entypo name="circle" size={24} color={COLOR.BLUE} />
        )}
      </S.CheckButton>

      <S.TaskText isChecked={task.isChecked}>{task.name}</S.TaskText>

      <S.TrashButton onPress={() => onDelete()}>
        <Feather name="trash-2" size={24} color={COLOR.GRAY_300} />
      </S.TrashButton>
    </S.Container>
  )
}
