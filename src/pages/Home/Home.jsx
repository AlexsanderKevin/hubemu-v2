import React, { useEffect, useState } from 'react';
import ListFavorites from './ListFavorites';
import ListRecents from './ListRecents';
import styles from './Home.module.css'
import { findAllGames } from '../../API/gameAPI';
import { Plus } from '@phosphor-icons/react';
import ModalAddGames from '../../components/Modal/ModalAddGames/ModalAddGames';

export default function Home () {
  const [ games, setGames ] = useState([])
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  useEffect(() => {
    const fetchGames = async () => {
      const dbGames = await findAllGames()
      console.log('db games: ', dbGames)
      setGames(dbGames)
    }
    fetchGames()
  }, [])

  return (
    <>
      <main className={styles.home}>
        { games.length > 0 ? (
          <>
            <ListRecents/>
            <ListFavorites/>
          </>
        ) : (
          <div className={styles.containerNoGames}>
            <p>Você ainda não tem nenhum jogo registrado.</p>
            <button onClick={() => setModalIsOpen(true)}>
              Adicionar Jogos 
              <Plus weight='bold'/>
            </button>
          </div>
        )}

        <ModalAddGames
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
        />
      </main>
    </>
  )
}
