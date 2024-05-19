import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Transaction } from './pages/Transactions'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled/>
      <Transaction/>
      {/* <h1>Ola mundo</h1> */}
    </ThemeProvider>
  )
}
