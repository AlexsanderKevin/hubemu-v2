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

        <div className={`${styles.linkGroup} navigation-container vertical`} data-navigation-index="10" data-orientation="vertical">
          <button className={`${styles.navLink} active navigation-item`}><House weight='bold' /> Home</button>
          <button className={styles.navLink}><SquaresFour weight='bold' /> Biblioteca</button>
          <button className={styles.navLink}><GearSix weight='bold' /> Configurações</button>
        </div>
      </div>

      <div>
        <h1 className={styles.title}><Play/> Inicio Rapido</h1>

        <div className={`navigation-container vertical`} data-navigation-index="11" data-orientation="vertical">
          {list.map(( item, index ) => (
            <button 
              key={ index }
              className={`${styles.quickStartBtn}`}
            >
              { item.name }
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
