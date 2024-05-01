import React from 'react';
import ListFavorites from './ListFavorites';
import ListRecents from './ListRecents';
import styles from './Home.module.css'
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

export default function Home () {
  return (
    <>
      <AnimatedBackground/>
      
      <main className={styles.home}>
        <ListRecents/>
        <ListFavorites/>
      </main>
    </>
  )
}
