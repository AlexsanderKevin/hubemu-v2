import { ArrowRight, GameController, Joystick, Plus } from '@phosphor-icons/react'
import menuStyles from './Menu.module.css'
import styles from './PlatformList.module.css'
import { NavLink } from 'react-router-dom'

export default function PlatformList() {
  const platforms  = [
    {id: 1, name: "Play Station 2", totalGames: 29},
    {id: 1, name: "GBA", totalGames: 15},
    {id: 1, name: "Nintendo Switch", totalGames: 30},
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

          {platforms.map(( platform, index ) => (
            <NavLink 
              key={ index }
              className={`${styles.quickStartBtn} navigation-item`}
              to={`platforms/${platform.id}`}
            >
              <span className={`${styles.platformName}`}>{ platform.name }</span>
              <span className={`${styles.platformTotalGames}`}>{ platform.totalGames } Jogos</span>
              <GameController/>
            </NavLink>
          ))}

          {platforms.length > 0 ? (

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
                className={`navigation-item ${styles.addPlatformBtn}`}
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
