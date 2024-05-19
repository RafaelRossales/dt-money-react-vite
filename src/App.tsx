import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyled } from './styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionContext'


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled/>
      <TransactionsProvider>
        <Transaction/>
      </TransactionsProvider>
    </ThemeProvider>
  )
}
