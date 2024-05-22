import { useState } from "react";
import Modal from "../Modal";
import { FolderSimple } from "@phosphor-icons/react";
import modalStyles from '../Modal.module.css'

export default function ModalAddGames({ isOpen, setIsOpen }) {
  const [ gamesInDir, setGamesInDir ] = useState([])
  const [ hasMadeSearch, setHasMadeSearch ] = useState(false)

  const saveGames = async () => {
    setIsOpen(false)
  }

  const searchGamesInDir = async () => {
    setHasMadeSearch(true)
  }

  const handleSubmit = () => {
    if (gamesInDir.length === 0) searchGamesInDir()
    else saveGames()
  }

  const handleClose = () => {
    if (gamesInDir.length === 0) { 
      setHasMadeSearch(false)
      setIsOpen(false) 
    }
    else setGamesInDir([])
  }

  return (
    <Modal
      header='Adicionar Emuladores'
      modalOpenState={isOpen}
      labelSubmitButton={gamesInDir.length === 0 ? 'Próximo' : 'Salvar'}
      labelCancelButton={gamesInDir.length === 0 ? 'Cancelar' : 'Voltar'}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      { gamesInDir.length === 0 ? (
        <>
          <p>Aponte o seu diretório de jogos.</p>
          <div className={modalStyles.containerInputDirPath}>
            <FolderSimple weight="bold"/>
            <input
              id={`input-dirpath`}
              name={`input-dirpath`}
              className={modalStyles.inputDirPath}
              type="text" 
              placeholder={`Ex: C:/diretorio/jogos`}
              // onChange={(event) => handleChangeInputDirPath(event, index)}
              required
            />
          </div>
          { hasMadeSearch && <p className={modalStyles.inputErrorMessage}>Nenhum jogo encontrado nesse diretório.</p> }
        </>
      ) : (
        <></>
      )}
    </Modal>
  )
}
