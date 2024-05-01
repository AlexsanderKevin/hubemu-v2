import React from 'react';
import { Sparkle, Play } from '@phosphor-icons/react'
import homeStyles from './Home.module.css'
import styles from './ListFavorites.module.css'

export default function ListFavorites () {
  const list = [
    {name: "Kingdom Hearts", gamePath: "D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso", dirPath: "D:/Emulador/Emuladores/PS2 - PCSX2", exeCommand: "./pcsx2.exe --nogui --fullscreen"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
  ]

  return (
    <>
      <h1 className={homeStyles.title}>
        <Sparkle/>
        Favoritos
      </h1>

      <div 
        id='list-favorites'
        data-navigation-index="1" 
        data-orientation="horizontal" 
        data-up-container="list-recents"
        data-down-container="list-favorites"
        data-left-container="list-quick-start"
        data-right-container="list-favorites"
        className={`${styles.listFavorites} navigation-container horizontal`}
      >
        {list.map(( item, index ) => (
          <button 
            className='navigation-item' 
            key={ index }
          >
            { item.name }
            <span className={styles.playLabel}>
              <Play weight='bold'/>
              Iniciar
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
