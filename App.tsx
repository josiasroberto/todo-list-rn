import { Home } from '@screens/Home'
import { defaultTheme } from '@theme/index'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}
