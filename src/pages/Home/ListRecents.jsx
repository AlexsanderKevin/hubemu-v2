import React from 'react';
import { fetchGameMetadata, playGame } from '../../API/gameAPI';
import styles from './ListRecents.module.css'
import homeStyles from './Home.module.css';
import { ClockCountdown, Play } from '@phosphor-icons/react'
import { Disc } from '@phosphor-icons/react/dist/ssr';

export default function ListRecents () {
  const list  = [
    {
      name: "Kingdom Hearts 2", 
      gamePath: "D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso", 
      dirPath: "D:/Emulador/Emuladores/PS2 - PCSX2", 
      exeCommand: "./pcsx2.exe --nogui --fullscreen",
      backgroundImage: "https://media.rawg.io/media/games/92b/92b781d88f6d047b1c61b6e0d157343b.jpg",
    },
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"},
    {name: "Jogo", gamePath: "#", dirPath: "#", exeCommand: "#"}
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
        {list.map(( item, index ) => (
          <button 
            key={ index }
            className='navigation-item' 
            // onClick={event => playGame(event, item)} 
            onClick={event => fetchGameMetadata(event)} 
            style={{backgroundImage: 'url(' + item.backgroundImage + ')',}}
          >
            <div className={`${styles.nameLabel}`}>
              <span >{ item.name }</span>
            </div>

            <Disc className={`${styles.bgIcon}`}/>
            <span className={ styles.playLabel }>
              <Play weight='fill'/>
              Iniciar
            </span>
          </button>
        ))}
      </div>
    </>
  )
}
