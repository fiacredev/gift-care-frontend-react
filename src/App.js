
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import DocSystem from './components/system/DocSystem'
import StockSystem from './components/system/StockSystem'
import LogIn from './components/system/LogIn'
import SignUp from './components/system/SignUp'
import Auth from './components/system/Auth'
import TestShii from './components/system/TestShii'
import DecisionRoom from './components/system/DecisionRoom'
import BottomFooter from './components/BottomFooter'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/doc' element={<DocSystem/>}></Route>
      <Route path='/stock' element={<StockSystem/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/type' element={<TestShii/>}></Route>
      <Route path='/decision' element={<DecisionRoom/>}></Route>
      <Route path='/boo' element={<BottomFooter/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App