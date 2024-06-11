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
      <div 
        id='container-2'
        data-navigation-index="1" 
        data-orientation="horizontal" 
        data-up-container="container-1"
        data-down-container="container-2"
        data-left-container="list-quick-start"
        data-right-container="container-2"
        className={`${styles.listFavorites} navigation-container horizontal`}
      >

        {favoriteGames.length ? favoriteGames.map(( game, index ) => (
          <CardGame 
            key={index}
            game={game}
            classNames={`navigation-item`}
          >
            <div className={`${styles.nameLabel}`}>
              <span >{ game.nameClean }</span>
            </div>

            <span className={ styles.playLabel }>
              <Play weight='fill'/>
              Iniciar
            </span>
          </CardGame>
        )) : (
          <p className={styles.labelNoFavorites}>Seus jogos marcados como favoritos aparecerão aqui.</p>
        )}
      </div>
    </>
  )
}
