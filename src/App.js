import React from 'react'
import { CssBaseline } from '@material-ui/core'
import RTL from './componenets/RTL'
import ThemeProvider from './componenets/ThemeProvider'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'
import CartContextProvider from './contexts/CartContext'
import ModalContextProvider from './contexts/ModalContext'
function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <ModalContextProvider>
          <CartContextProvider>
            <LoginContextProvider>
              <MasterLayout />
            </LoginContextProvider>
          </CartContextProvider>
        </ModalContextProvider>
      </RTL>
    </ThemeProvider>
  )
}

export default App
