import './App.css'
import Menu from './components/Menu/Menu'
import { GamepadProvider } from './context/Gamepad'
import { useEffect } from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground'
import Library from './pages/Library/Library'
import Config from './pages/Config/Config'

function App() {
  const sendRequest = async event => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('playGame', [{
        dirPath: 'D:/Emulador/Emuladores/PS2 - PCSX2',
        gamePath: 'D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso',
        exeCommand: './pcsx2.exe --nogui --fullscreen'
      }])
      console.log(list)
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

  return (
    <GamepadProvider>
      <div className='body'>
        <BrowserRouter>
          <Menu/>
          <AnimatedBackground/>
          <div className='mainContainer'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/lib' element={<Library/>}/>
              <Route path='/config' element={<Config/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </GamepadProvider>
  )
}

export default App
