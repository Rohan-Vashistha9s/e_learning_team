import './App.css'
import Home from './components/HomeSection/Home'
import Membership from './components/Membership/Membership'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'




function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/members' element={<Membership />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
