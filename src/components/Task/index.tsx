import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import * as S from './styles'
import { useState } from 'react'
import { useTheme } from 'styled-components/native'

export function Task() {
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

      <S.TaskText isChecked={isChecked}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        quidem ea commodi nisi velit pariatur laborum ipsum numquam vitae
        aliquam alias. Odit nam quidem aliquam iusto, labore eum aliquid
        dolorum?
      </S.TaskText>

      <S.TrashButton>
        <Feather name="trash-2" size={24} color={COLOR.GRAY_300} />
      </S.TrashButton>
    </S.Container>
  )
}
