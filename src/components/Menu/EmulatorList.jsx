import { ArrowRight, GameController, Joystick, Plus } from '@phosphor-icons/react'
import menuStyles from './Menu.module.css'
import styles from './EmulatorList.module.css'
import { NavLink } from 'react-router-dom'

export default function EmulatorList() {
  const emulators  = [
    {id: 1, name: "Play Station 2", totalGames: 29},
    {id: 1, name: "GBA", totalGames: 15},
    {id: 1, name: "Nintendo Switch", totalGames: 30},
  ]

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
              <span className={`${styles.emulatorName}`}>{ emulator.name }</span>
              <span className={`${styles.emulatorTotalGames}`}>{ emulator.totalGames } Jogos</span>
              <GameController/>
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
              <p className={styles.text}>Você ainda não tem nenhuma plataforma</p>
              <NavLink 
                className={`navigation-item ${styles.addEmulatorBtn}`}
                to="emulators"
              >
                Adicionar
                <Plus weight='bold'/>
              </NavLink>
            </>
          )}

        </div>
      </div>
  )
}
