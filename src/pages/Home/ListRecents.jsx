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
        id='container-1'
        data-navigation-index="0" 
        data-orientation="horizontal" 
        data-up-container="container-1"
        data-down-container="container-2"
        data-left-container="navigation-menu"
        data-right-container="container-1"
        className={`${styles.listRecents} navigation-container horizontal`}
      >
        {allGames.map(( item, index ) => (
          <CardRecentGame game={item} key={index}/>
        ))}
      </div>
    </>
  )
}
