import { FolderSimple } from '@phosphor-icons/react'
import Modal from '../Modal'
import modalStyles from '../Modal.module.css'
import { ModalContext } from '../../../context/ModalContext'
import { useContext, useState } from 'react'
import { setEmulatorDirPath } from '../../../API/emulatorAPI'
import { GlobalContext } from '../../../context/GlobalContext'

export default function ModalSetDirOfEmulator() {
  const [ dirPath, setDirPath ] = useState('')

  const { setUpdatedEmulators } = useContext(GlobalContext)
  const { 
    emulatorId,
    setEmulatorId,
    openModalSetDirOfEmulator,
    setOpenModalSetDirOfEmulator,
  } = useContext(ModalContext)

  const handleClose= event => {
    event.preventDefault()
    setEmulatorId(null)
    setOpenModalSetDirOfEmulator(false)
  }

  const handleSubmit = async event => {
    event?.preventDefault()
    await setEmulatorDirPath(dirPath, emulatorId)
    setUpdatedEmulators(state => !state)
    setDirPath('')
    setEmulatorId(null)
    setOpenModalSetDirOfEmulator(false)
  }

  const handleChange = event => {
    setDirPath(event.target.value)
  }

  return (
    <Modal
      header='Adicionar caminho'
      modalOpenState={openModalSetDirOfEmulator}
      labelCancelButton='Fechar'
      labelSubmitButton='Próximo'
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <p>Adicione o caminho para o emulador.</p>

      <div className={modalStyles.containerInputDirPath}>
        <FolderSimple weight="bold"/>
        <input
          id={`input-dirpath`}
          name={`input-dirpath`}
          className={modalStyles.inputDirPath}
          type="text" 
          placeholder={`Ex: C:/emuladores/emulador`}
          value={dirPath}
          onChange={handleChange}
          required
        />
      </div>
    </Modal>
  )
}
