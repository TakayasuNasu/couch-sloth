import React from 'react'
import { Reset } from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Index from './pages/Index'
import Chats from './pages/Chats'
import Header from './pages/Header'
import Player from './pages/Player'
import Messages from './pages/Messages'

const App = () => {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <Switch>
          <Route path='/chats'>
            <Chats />
          </Route>
          <Route path='/header'>
            <Header />
          </Route>
          <Route path='/player'>
            <Player />
          </Route>
          <Route path='/messages'>
            <Messages />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
