import React from 'react'
import Registration from './Component/Registration'
import GenerateOtp from './Component/GenerateOtp'
import VerifyOtp from './Component/verifyOtp'
import SuccessPage from './Component/SuccessPage'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path='/' element={<Registration/>}></Route>
          <Route path='/generateOtp' element={<GenerateOtp/>}></Route>
          <Route path='/verifyOtp' element={<VerifyOtp/>}></Route>
          <Route path='/successPage' element={<SuccessPage/>}></Route>
        </Routes>
       </Router>
    </div>
   
  )
}

export default App