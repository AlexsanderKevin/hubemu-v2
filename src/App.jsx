import './App.css'
import Menu from './components/Menu/Menu'
import { GamepadProvider } from './context/Gamepad'
import { useEffect } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Library from './pages/Library/Library'
import Config from './pages/Config/Config'
import Emulators from './pages/Emulators/Emulators'
import Modal from './components/Modal/Modal'
import { ModalProvider } from './context/ModalContext'
import { GlobalPrivider } from './context/GlobalContext'

function App() {
  const sendRequest = async event => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('playGame', [{
        dirPath: 'D:/Emulador/Emuladores/PS2 - PCSX2',
        gamePath: 'D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso',
        exeCommand: './pcsx2.exe --nogui --fullscreen'
      }])
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

  return (
    <GlobalPrivider>
    <GamepadProvider>
    <ModalProvider>
      <div className='body'>
        <BrowserRouter>
          <Menu/>
          <AnimatedBackground/>
          <div className='mainContainer'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/lib' element={<Library/>}/>
              <Route path='/config' element={<Config/>}/>
              <Route path='/emulators' element={<Emulators/>}/>
              <Route path='/emulators/:id' element={<Emulators/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ModalProvider>
    </GamepadProvider>
    </GlobalPrivider>
  )
}

export default App
