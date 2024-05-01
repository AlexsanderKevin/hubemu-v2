import './App.css'
import Menu from './components/Menu/Menu'
import { GamepadProvider } from './context/Gamepad'
import { useEffect } from 'react'
import Home from './pages/Home/Home'

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
        <Menu/>
        <Home/>
      </div>
    </GamepadProvider>
  )
}

export default App
