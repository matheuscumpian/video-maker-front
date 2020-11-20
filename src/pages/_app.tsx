import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'
import { Provider } from 'react-redux'
import { store } from '../store'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
