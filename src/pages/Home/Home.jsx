import React from 'react';
import ListFavorites from './ListFavorites';
// import { GamepadProvider } from '../../context/Gamepad';
import ListRecents from './ListRecents';
import styles from './Home.module.css'
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

export default function Home () {

  const sendRequest = async ( event, target ) => {
    event.target.disabled = true
    try {
      const list = await window.api.invoke('playGame', [ target ])
      console.log(list)
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

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
