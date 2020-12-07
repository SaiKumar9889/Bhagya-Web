import Head from 'next/head'

import { Fragment } from 'react';
import { AutoSwiper} from '../pages-components/welcome/AutoSwiper';
import Header from '../pages-components/header/Header';
import { Button, Pane, Text } from 'evergreen-ui'

export default () => {

  return (
    <Fragment>
            <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <main >
   
        
        <AutoSwiper />
<Button>I am using 🌲 Evergreen!</Button>

<Pane
  height={120}
  width={240}
  display="flex"
  alignItems="center"
  justifyContent="center"
  border="default"
  elevation={1}
  background="tint2"
>
  <Text>Pane</Text>
</Pane>

      </main>

      <footer>

      </footer>
 
    </Fragment>

  )
}
