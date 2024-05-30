import { useEffect, useState } from 'react'
import styles from './Modal.module.css'

export default function Modal({ 
  children, 
  header, 
  onClose, 
  onSubmit, 
  modalOpenState, 
  labelSubmitButton, 
  labelCancelButton,
}) {
  const [ modalIsOpen, setModalIsOpen ] = useState(modalOpenState)

  useEffect(() => {
    setModalIsOpen(modalOpenState)
  }, [modalOpenState])

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit()
  }

  return ( 
    modalIsOpen ?

    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <form action="">
          <div className={styles.modalHeader}>
            {header}
          </div>
          <div className={styles.modalBody}>
            { children }
          </div>
          <div className={styles.modalFooter}>
            <button type='reset' onClick={onClose}>{labelCancelButton}</button>
            <button type='submit' onClick={handleSubmit}>{labelSubmitButton}</button>
          </div>
        </form>
      </div>
    </div>

    : null
  )
}
