import React from 'react';
import { playGame } from '../../API/playGame';
import styles from './ListRecents.module.css'
import homeStyles from './Home.module.css';
import { ClockCountdown, Play } from '@phosphor-icons/react'

export default function ListRecents () {
  const list  = [
    {name: "Kingdom Hearts", gamePath: "D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso", dirPath: "D:/Emulador/Emuladores/PS2 - PCSX2", exeCommand: "./pcsx2.exe --nogui --fullscreen"},
  ]

  return (
    <>
      <h1 className={homeStyles.title}>
        <ClockCountdown/>
        Recentes
      </h1>
      <div 
        id='list-recents'
        data-navigation-index="0" 
        data-orientation="horizontal" 
        data-up-container="list-recents"
        data-down-container="list-favorites"
        data-left-container="navigation-menu"
        data-right-container="list-recents"
        className={`${styles.listRecents} navigation-container horizontal`}
      >
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>
        <button className='navigation-item'>item</button>

        {list.map(( item, index ) => (
          <button 
            key={ index }
            className='navigation-item' 
            onClick={event => playGame(event, item)} 
          >
            { item.name }
            <span className={ styles.playLabel }>
              <Play weight='bold'/>
              Iniciar
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
