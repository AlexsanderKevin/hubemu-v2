import { ArrowRight, GameController, Joystick, Plus } from '@phosphor-icons/react'
import menuStyles from './Menu.module.css'
import styles from './PlatformList.module.css'
import { NavLink } from 'react-router-dom'

export default function PlatformList() {
  const list  = [
    // {id: 0, name: "Play Station 2", totalGames: 29},
    // {id: 0, name: "GBA", totalGames: 15},
    // {id: 0, name: "Nintendo Switch", totalGames: 30},
  ]

  return (
      <div>
        <h1 className={menuStyles.title}><Joystick/> Plataformas</h1>

        <div 
          id='list-quick-start'
          className={`navigation-container vertical`} 
          data-orientation="vertical"
          data-up-container="navigation-menu"
          data-down-container="list-quick-start"
          data-left-container="list-quick-start"
          data-right-container="list-favorites"
        >

          {list.map(( item, index ) => (
            <button 
              key={ index }
              className={`${styles.quickStartBtn} navigation-item`}
            >
              <span className={`${styles.platformName}`}>{ item.name }</span>
              <span className={`${styles.platformTotalGames}`}>{ item.totalGames } Jogos</span>
              <GameController/>
            </button>
          ))}

          {list.length > 0 ? (

            <NavLink 
              className={`${styles.morePlatformsLink} navigation-item`}
              to="platforms"
            >
              Mais
              <ArrowRight weight='bold'/>
            </NavLink>

          ) : (
            <>
              <p className={styles.text}>Você ainda não tem nenhuma plataforma</p>
              <NavLink 
                className={`${styles.addPlatformBtn} navigation-item`}
                to="platforms"
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
