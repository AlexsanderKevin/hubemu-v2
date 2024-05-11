import React, { useEffect, useState } from 'react';
import ListFavorites from './ListFavorites';
import ListRecents from './ListRecents';
import styles from './Home.module.css'
import { fetchGameMetadata, fetchGamesFromDir } from '../../API/gameAPI';
import { saveGameDir } from '../../API/gameDirApi';

export default function Home () {
  useEffect(() => {
    // fetchGamesFromDir()
    fetchGameMetadata()
    saveGameDir()
  }, [])
  return (
    <>
      <main className={styles.home}>
        <ListRecents/>
        <ListFavorites/>
      </main>
    </>
  )
}
