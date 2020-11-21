import React, { Component } from 'react'
import logo from '../logo.svg'
import WebSocket from '../components/WebSocket'
import '../App.css'

const Index = props => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <WebSocket />
  </div>
)

export default Index