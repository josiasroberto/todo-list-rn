import { Home } from '@screens/Home'
import { defaultTheme } from '@theme/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0D0D0D"
        translucent
      />
      <Home />
    </ThemeProvider>
  )
}
