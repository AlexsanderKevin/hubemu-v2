import { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../../context/ModalContext'
import Modal from '../Modal'
import styles from './ModalGameOptions.module.css'
import { Star, Trash } from '@phosphor-icons/react'
import { deleteGame, setGameFavorite } from '../../../API/gameAPI'
import { GlobalContext } from '../../../context/GlobalContext'

export default function ModalGameOptions () {
  const {
    openModalGameOptions,
    setOpenModalGameOptions,
    game,
    setGame,
  } = useContext(ModalContext)
  const { setUpdatedGames } = useContext(GlobalContext)

  const handleClose = () => {
    setOpenModalGameOptions(false)
    setGame(null)
  }

  const handleFavorite = async (event) => {
    event.preventDefault()
    const isFavorite = !game?.isFavorited
    await setGameFavorite(game?.id, isFavorite)
    setUpdatedGames(state => !state)
    handleClose()
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    await deleteGame(game?.id)
    setUpdatedGames(state => !state)
    handleClose()
  }

  return (
    <Modal
      header={game?.nameClean}
      modalOpenState={openModalGameOptions}
      labelCancelButton='Fechar'
      onClose={handleClose}
    >
      <div
        className={`${styles.buttonList}`}
      >
        <button 
          className={`navigation-item`}
          onClick={handleFavorite}
        >
          <Star 
            weight={game?.isFavorited ? 'fill' : 'bold'}
          />
          {game?.isFavorited ? 'Desfavoritar' : 'Favoritar'}
        </button>
        <button 
          className={`${styles.buttonDelete} navigation-item`}
          onClick={handleDelete}
        >
          <Trash weight='bold'/>
          Deletar
        </button>
      </div>
    </Modal>
  )
}
