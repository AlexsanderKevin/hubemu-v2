import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import styles from './Modal.module.css'

export default function Modal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext)

  return ( 
    modalIsOpen ?

    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          header
        </div>
        <div className={styles.modalBody}>
          body
        </div>
        <div className={styles.modalFooter}>
          footer
        </div>
      </div>
    </div>

    : null
  )
}
