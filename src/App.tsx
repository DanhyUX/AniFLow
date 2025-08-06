import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './Pages/home'
import OnepiecePage from './Pages/onepiece'
import AttackOnTitans from './Pages/attack'
import DemonSlayer from './Pages/kimetsu'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='onepiece' element={<OnepiecePage />} />
      <Route path='attack' element={<AttackOnTitans />} />
      <Route path='kimetsu' element={<DemonSlayer />} />

      </Routes>
    </BrowserRouter>
</>
  )
}

export default App

