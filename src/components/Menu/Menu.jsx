import { House, GearSix, SquaresFour } from '@phosphor-icons/react/dist/ssr'
import styles from './Menu.module.css'
import { List, Play } from '@phosphor-icons/react'

export default function Menu() {
  const list  = [
    {name: "Kingdom Hearts", gamePath: "D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso", dirPath: "D:/Emulador/Emuladores/PS2 - PCSX2", exeCommand: "./pcsx2.exe --nogui --fullscreen"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
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
          <button className={`${styles.navLink} active navigation-item`}><House weight='bold' /> Home</button>
          <button className={`${styles.navLink} navigation-item`}><SquaresFour weight='bold' /> Biblioteca</button>
          <button className={`${styles.navLink} navigation-item`}><GearSix weight='bold' /> Configurações</button>
        </div>
      </div>

      <div>
        <h1 className={styles.title}><Play/> Inicio Rapido</h1>

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
              { item.name }
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
