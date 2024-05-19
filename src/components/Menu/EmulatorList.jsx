import { ArrowRight, Folder, GameController, Joystick, Plus, Terminal, TerminalWindow } from '@phosphor-icons/react'
import menuStyles from './Menu.module.css'
import styles from './EmulatorList.module.css'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { findAllEmulators } from '../../API/emulatorAPI'
import { GlobalContext } from '../../context/GlobalContext'
import ModalNoEmulators from '../Modal/ModalNoEmulators/ModalNoEmulators'

export default function EmulatorList() {
  const [ emulators, setEmulators ] = useState([])
const [ modalIsOpen, setModalIsOpen ] = useState()
  const { updatedEmulators } = useContext(GlobalContext)

  useEffect(() => {
    async function fetchEmulators() {
      const response = await findAllEmulators()
      setEmulators(response)
      console.log('atualizou')
    }
    fetchEmulators()
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

          {emulators.length > 0 ? (

            <NavLink 
              className={`${styles.moreEmulatorsLink} navigation-item`}
              to="emulators"
            >
              Mais
              <ArrowRight weight='bold'/>
            </NavLink>

          ) : (
            <>
              <ModalNoEmulators 
                isOpen={modalIsOpen} 
                setIsOpen={setModalIsOpen}
              />
              <p className={styles.text}>Você ainda não tem nenhum emulador registrado</p>
              <button 
                className={`navigation-item ${styles.addEmulatorBtn}`}
                to="emulators"
                onClick={() => {
                  setModalIsOpen(true)
                  console.log(modalIsOpen)
                }}
              >
                Adicionar
                <Plus weight='bold'/>
              </button>
            </>
          )}

        </div>
      </div>
  )
}
