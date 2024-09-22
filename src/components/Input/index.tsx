import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'
import { useState } from 'react'

export interface InputProps extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Container
      isFocused={isFocused}
      ref={inputRef}
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}
