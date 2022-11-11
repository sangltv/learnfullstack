import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'

const App = () => {
  
  return(
   <Routes >
     <Route path='/' element={ <Home /> }/>
     <Route path='/login' element={ <Login />} />
   </Routes>
  )
}

export default App