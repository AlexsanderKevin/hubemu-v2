import React from 'react';
import styles from './ListRecents.module.css'
import homeStyles from './Home.module.css';
import { ClockCountdown } from '@phosphor-icons/react'
import CardRecentGame from './CardRecentGame';

export default function ListRecents ({ allGames }) {
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
        {allGames.map(( item, index ) => (
          <CardRecentGame game={item} key={index}/>
        ))}
      </div>
    </>
  )
}
