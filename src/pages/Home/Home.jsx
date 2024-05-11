import React, { useEffect, useState } from 'react';
import ListFavorites from './ListFavorites';
import ListRecents from './ListRecents';
import styles from './Home.module.css'
import { fetchGameMetadata, fetchGamesFromDir } from '../../API/gameAPI';

export default function Home () {
  useEffect(() => {
    fetchGamesFromDir()
    fetchGameMetadata()
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
