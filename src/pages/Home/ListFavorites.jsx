import React, { useContext, useEffect, useState } from 'react';
import { Sparkle, Play, Disc } from '@phosphor-icons/react'
import homeStyles from './Home.module.css'
import styles from './ListFavorites.module.css'
import { findFavoriteGames } from '../../API/gameAPI';
import CardGame from '../../components/CardGame/CardGame';
import { GlobalContext } from '../../context/GlobalContext';

export default function ListFavorites () {
  const { updatedGames } = useContext(GlobalContext)
  const [ favoriteGames, setFavoriteGames ] = useState([])

  useEffect(() => {
    const fetchFavoriteGames = async () => {
      const games = await findFavoriteGames()
      setFavoriteGames(games)
      console.log('favorited: ', games)
    }
    fetchFavoriteGames()
  }, [ updatedGames ])

  return (
    <>
      <h1 className={homeStyles.title}>
        <Sparkle/>
        Favoritos
      </h1>

      {favoriteGames.length ? favoriteGames.map(( game, index ) => (
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
          <CardGame 
            key={index}
            game={game}
          >
            <span className={`${styles.nameLabel}`}>{ game.name }</span>
            <Disc className={`${styles.bgIcon}`}/>
            <span className={styles.playLabel}>
              <Play weight='bold'/>
              Iniciar
            </span>
          </CardGame>
        </div>
      )) : (
        <p>Seus jogos marcados como favoritos aparecerão aqui.</p>
      )}
    </>
  )
}
