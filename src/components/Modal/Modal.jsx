import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import styles from './Modal.module.css'

export default function Modal() {
  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext)

  const handleClick = async () => {
    const file = await window.showDirectoryPicker()
    console.log(file)
  }

  return ( 
    modalIsOpen ?

    <div className={styles.modal}>
      <div className={styles.modalContainer}>
        <form action="">
          <div className={styles.modalHeader}>
            Adicionar plataforma
          </div>
          <div className={styles.modalBody}>
            <p>Você ainda não configurou nenhuma plataforma. Insira o caminho para o diretório em que seu emulador está instalado</p>
            <div className={styles.inputContainer}>
              <label htmlFor="directory-input">Caminho do  emulador</label>
              <input type="text" name='directory-input' id='directory-input' required/>
            </div>
            <button onClick={handleClick}>File explorer</button>
          </div>
          <div className={styles.modalFooter}>
            <button type='clear'>Voltar</button>
            <button type='submit'>Próximo</button>
          </div>
        </form>
      </div>
    </div>

    : null
  )
}
