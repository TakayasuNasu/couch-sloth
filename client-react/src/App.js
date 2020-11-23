import React from 'react'
import { Reset } from 'styled-reset'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import youtube from '/home/work/git_workspace/couch-sloth/client-react/src/components/Api/youtube.js'
import Index from './pages/Index'
import Chats from './pages/Chats'
import Header from './pages/Header'
import Player from './pages/Player'
import Messages from './pages/Messages'
import Searchbar from './components/Searchbar'
import VideoDescription from './components/VideoDescription'
import VideoList from './components/VideoList'

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })

      this.setState({
          videos: response.data.items
      })
      console.log("this is resp",response);
  };
  handleVideoSelect = (video) => {
      this.setState({selectedVideo: video})
  }

  render() {
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
            <Route path='/searchbar'>
              <Searchbar />
            </Route>
            <Route path='/messages'>
              <Messages />
            </Route>
            <Route path='/videodescription'>
              <VideoDescription />
            </Route>
            <Route path='/videolist'>
              <VideoList />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
