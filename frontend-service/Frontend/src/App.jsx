
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from './Components/Home'
import {Routes,Route} from "react-router-dom"
import Login from './Components/Login'
import Homepage from './Components/Homepage'
import Trains from './Components/Trains'
import Booking from './Components/Booking'
import Otp from './Components/Otp'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/homepage' element={<Homepage />} />
      <Route path='/trains' element={<Trains/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/otp' element={<Otp/>} />
    </Routes>
    </>
  )
}

export default App
