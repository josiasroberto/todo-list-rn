import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import * as S from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'

interface TaskProps {
  task: string
}

export function Task({ task }: TaskProps) {
  const { COLOR } = useTheme()

  const [isChecked, setIsChecked] = useState(false)
  return (
    <S.Container isChecked={isChecked}>
      <S.CheckButton
        isChecked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      >
        {isChecked ? (
          <AntDesign name="checkcircle" size={24} color={COLOR.PURPLE_DARK} />
        ) : (
          <Entypo name="circle" size={24} color={COLOR.BLUE} />
        )}
      </S.CheckButton>

      <S.TaskText isChecked={isChecked}>{task}</S.TaskText>

      <S.TrashButton>
        <Feather name="trash-2" size={24} color={COLOR.GRAY_300} />
      </S.TrashButton>
    </S.Container>
  )
}
