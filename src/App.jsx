import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import { Contacto, Home, NotFound } from './layouts'

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}>inicio</Route>
        <Route path='/contacto' element={<Contacto />}> contacto </Route>
        <Route path='*' element={<NotFound />}>inicio</Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
