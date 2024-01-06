import React from 'react'
import Header from './components/Header'
import {Main} from "./styled/theme"
import SideNav from './components/SideNav'
import { Route,Routes } from 'react-router-dom'
import Wallet from './components/Wallet'
import Transaction from './components/Transaction'
import './App.css'
const App = () => {
  return (
    <Main>
      <Header />
      <div className='Hero'>
      <SideNav /> 
      <Routes>
        <Route path='/' exact Component={Wallet} />
        <Route path='/transaction' Component={Transaction} />
      </Routes>
      </div>
    </Main>
  )
}

export default App