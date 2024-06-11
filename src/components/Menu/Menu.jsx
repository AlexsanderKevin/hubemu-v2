import { House, GearSix, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import styles from './Menu.module.css'
import { List } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import EmulatorList from './EmulatorList'

export default function Menu() {
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
          data-right-container="container-1"
        >
          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/"
            data-navigation-id={0}
          >
            <House weight='bold' /> 
            <House weight='bold' className={styles.bgIcon} /> 
            Home
          </NavLink>

          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/lib"
            data-navigation-id={1}
          >
            <SquaresFour weight='bold' /> 
            <SquaresFour weight='bold' className={styles.bgIcon} /> 
            Biblioteca
          </NavLink>

          <NavLink 
            className={`${styles.navLink} navigation-item`}
            to="/config"
            data-navigation-id={2}
          >
            <GearSix weight='bold' /> 
            <GearSix weight='bold' className={styles.bgIcon} /> 
            Configurações
          </NavLink>
        </div>
      </div>

      <EmulatorList/>
    </aside>
  )
}
