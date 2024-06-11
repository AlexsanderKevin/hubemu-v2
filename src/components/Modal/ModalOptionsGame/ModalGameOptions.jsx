import { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext'
import Modal from '../Modal'
import styles from './ModalGameOptions.module.css'
import { Star, Trash } from '@phosphor-icons/react'

export default function ModalGameOptions () {
  const {
    openModalGameOptions,
    setOpenModalGameOptions,
    gameName,
    setGameName,
    gameId,
    setGameId,
  } = useContext(ModalContext)

  const handleClose = () => {
    setOpenModalGameOptions(false)
    setGameId(null)
    setGameName(null)
  }

  const handleFavorite = (event) => {
    event.preventDefault()
    console.log('favorite')
  }

  const handleDelete = (event) => {
    event.preventDefault()
    console.log('delete')
  }

  return (
    <Modal
      header={gameName}
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
          <Star weight='bold'/>
          Favoritar
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
