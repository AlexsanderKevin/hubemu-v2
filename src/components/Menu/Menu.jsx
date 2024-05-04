import { House, GearSix, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import styles from './Menu.module.css'
import { ArrowRight, GameController, Joystick, List } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const list  = [
    {id: 0, name: "Play Station 2", totalGames: 29},
    {id: 0, name: "GBA", totalGames: 15},
    {id: 0, name: "Nintendo Switch", totalGames: 30},
  ]

  return (
    <aside className={styles.menu}>
      <div>
        <h1 className={styles.title}><List/> Menu</h1>

        <div 
          id='navigation-menu'
          className={`${styles.linkGroup} navigation-container vertical`} 
          data-orientation="vertical"
          data-up-container="navigation-menu"
          data-down-container="list-quick-start"
          data-left-container="navigation-menu"
          data-right-container="list-recents"
        >
          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/"
          >
            <House weight='bold' /> 
            <House weight='bold' className={styles.bgIcon} /> 
            Home
          </NavLink>
          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/lib"
          >
            <SquaresFour weight='bold' /> 
            <SquaresFour weight='bold' className={styles.bgIcon} /> 
            Biblioteca
          </NavLink>
          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/config"
          >
            <GearSix weight='bold' /> 
            <GearSix weight='bold' className={styles.bgIcon} /> 
            Configurações
          </NavLink>
        </div>
      </div>

      <div>
        <h1 className={styles.title}><Joystick/> Plataformas</h1>

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
          <button className={`${styles.morePlatformsLink} navigation-item`}>
            Mais
            <ArrowRight weight='bold'/>
          </button>
        </div>
      </div>
    </aside>
  )
}
