import { ArrowRight, Folder, GameController, Joystick, Plus, Terminal, TerminalWindow } from '@phosphor-icons/react'
import menuStyles from './Menu.module.css'
import styles from './EmulatorList.module.css'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { findAllEmulators } from '../../API/emulatorAPI'
import { GlobalContext } from '../../context/GlobalContext'
import ModalAddEmulators from '../Modal/ModalAddEmulators/ModalAddEmulators'

export default function EmulatorList() {
  const [ emulators, setEmulators ] = useState([])
  const [ modalIsOpen, setModalIsOpen ] = useState()
  const { updatedEmulators } = useContext(GlobalContext)
  const [ defaultEmulators, setDefaultEmulators ] = useState([
    { name: 'PCSX2', platform: 'Playstation 2', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Citra', platform: 'Nintendo 3DS', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Cemu', platform: 'Nintendo WiiU', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Ryujinx', platform: 'Nintendo Switch', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'MyBoy', platform: 'GBA', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  ])

  useEffect(() => {
    async function fetchEmulators() {
      const response = await findAllEmulators()
      setEmulators(response)
    }

    const fetchRegisteredEmulators = async () => {
      const registeredEmulators = await findAllEmulators()
      const newDefaultEmulators = defaultEmulators.filter(item => {
        let isNotInTheList = true
        registeredEmulators.forEach(emu => {
          if (item.name === emu.name) {
            isNotInTheList = false
          }
        })
        return isNotInTheList
      })
      setDefaultEmulators(newDefaultEmulators)
    }
    fetchEmulators()
    fetchRegisteredEmulators()
  }, [ updatedEmulators ])

  return (
    <div>
      <h1 className={menuStyles.title}><Joystick/>Emuladores</h1>

      <div 
        id='list-quick-start'
        className={`navigation-container vertical`} 
        data-orientation="vertical"
        data-up-container="navigation-menu"
        data-down-container="list-quick-start"
        data-left-container="list-quick-start"
        data-right-container="list-favorites"
      >

        {emulators.map(( emulator, index ) => (
          <NavLink 
            key={ index }
            className={`${styles.quickStartBtn} navigation-item`}
            to={`emulators/${emulator.id}`}
          >
            <div className={styles.emulatorCardHeader}>
              <span className={`${styles.emulatorName}`}>{ emulator.name }</span>
              <span className={styles.emulatorPlatform}>{ emulator.platform }</span>
            </div>
            <div className={styles.emulatorCardFooter}>
              <span className={`${styles.emulatorTotalGames}`}>{ emulator.totalGames || '0' } Jogos</span>

              <div className={styles.emulatorErrorIcons}>
                { !emulator.dirPath && <Folder weight='bold' /> }
                { !emulator.exeCommand && <TerminalWindow weight='bold' /> }
              </div>
            </div>
            <GameController className={styles.bgSvg}/>
          </NavLink>
        ))}

        <ModalAddEmulators 
          isOpen={modalIsOpen} 
          setIsOpen={setModalIsOpen}
          defaultEmulators={defaultEmulators}
          setDefaultEmulators={setDefaultEmulators}
        />
        { emulators.length === 0 && <p className={styles.text}>Você ainda não tem nenhum emulador registrado</p>}
        
        { defaultEmulators.length && (
          <button 
            className={`navigation-item ${styles.moreEmulatorsLink}`}
            to="emulators"
            onClick={() => {
              setModalIsOpen(true)
            }}
          >
            Adicionar
            <Plus weight='bold'/>
          </button>
        )}

      </div>
    </div>
  )
}
