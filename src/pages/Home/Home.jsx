import React, { useEffect, useState } from 'react';
import ListFavorites from './ListFavorites';
import ListRecents from './ListRecents';
import styles from './Home.module.css'

export default function Home () {
  return (
    <>
      <main className={styles.home}>
        <ListRecents/>
        <ListFavorites/>
      </main>
    </>
  )
}
