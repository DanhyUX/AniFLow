import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './Pages/home'
import OnepiecePage from './Pages/onepiece'
import AttackOnTitans from './Pages/Attack'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='onepiece' element={<OnepiecePage />} />
      <Route path='attack' element={<AttackOnTitans />} />
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App

