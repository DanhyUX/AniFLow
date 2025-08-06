import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router'
import Home from './Pages/home'
import AnimePage from './Pages/anime'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='anime' element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App

