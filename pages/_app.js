
import '../styles/globals.css'
import '../pages-components/header/Header.css'
import { Fragment } from 'react'
import Header from '../pages-components/header/Header'

function MyApp({ Component, pageProps }) {
  return <Fragment> <Header /> <div style={{position: "relative", top: "70px" }}><Component {...pageProps} /> </div></Fragment>
}

export default MyApp
