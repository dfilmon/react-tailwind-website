import React from 'react'
import Header from './components/Header'
import LeftNav from './components/LeftNav'
import Feed from './components/Feed'
import Connections from './components/Connections'
import './App.css'
import styles from './style'

const App = () => {
  return (
    <div>
      <Header />
      <div className="contentContainer">
        <LeftNav />
        <Feed />
        <Connections />
      </div>
    </div>
  )
}

export default App
