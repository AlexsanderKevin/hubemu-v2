import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { FolderSimple } from "@phosphor-icons/react";
import modalStyles from '../Modal.module.css'
import styles from './ModalAddGames.module.css'
import { fetchGameMetadata, fetchGamesFromDir, saveGames } from "../../../API/gameAPI";
import { saveGameDir } from "../../../API/gameDirApi";
import { GlobalContext } from "../../../context/GlobalContext";

export default function ModalAddGames({ isOpen, setIsOpen }) {
  const [ gamesInDir, setGamesInDir ] = useState([])
  const [ hasMadeSearch, setHasMadeSearch ] = useState(false)
  const [ inputDirPath, setInputDirPath ] = useState('')
  const { setUpdatedGames } = useContext(GlobalContext)

  const handleSaveGames = async () => {
    const dirArray = inputDirPath.split('\\')
    const dirName = dirArray[dirArray.length - 1]
    const newDir = await saveGameDir(inputDirPath, dirName)
    const gamesToBeSaved = gamesInDir
      .map( item => {
        const result = { name: item, gameDirId: newDir.id }
        result.nameClean = result.name.split('').reverse().join('').split('.')[1].split('').reverse().join('')
        return result 
      })
    await saveGames(gamesToBeSaved)
    setGamesInDir([])
    setHasMadeSearch(false)
    setInputDirPath('')
    setUpdatedGames(state => !state)
    setIsOpen(false)
  }

  const searchGamesInDir = async () => {
    const games = await fetchGamesFromDir(inputDirPath)
    if (games) setGamesInDir(games.filter(item => item))
    setHasMadeSearch(true)
  }

  const handleSubmit = async () => {
    if (gamesInDir.length === 0) searchGamesInDir()
    else handleSaveGames()
  }

  const handleClose = () => {
    if (gamesInDir.length === 0) { 
      setHasMadeSearch(false)
      setInputDirPath('')
      setIsOpen(false) 
    }
    else {
      setHasMadeSearch(false)
      setGamesInDir([])
    }
  }

  return (
    <Modal
      header='Adicionar Jogos'
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
              value={inputDirPath}
              placeholder={`Ex: C:/diretorio/jogos`}
              onChange={(event) => setInputDirPath(event.target.value)}
              required
            />
          </div>
          { hasMadeSearch && <span className={modalStyles.inputErrorMessage}>Nenhum jogo encontrado nesse diretório.</span> }
        </>
      ) : (
        <>
          <h3>Arquivos no diretório:</h3>
          <p>{ inputDirPath }</p>
          <ul className={styles.listGames}>
            { gamesInDir.slice(0, 10).map(( game, gameIndex ) => (
              <li key={gameIndex}><span>{ game }</span></li>
            ))}
            { gamesInDir.length > 10 && <span className={styles.labelMoreGames}>... e mais {gamesInDir.length - 10} arquivos</span>}
          </ul>
        </>
      )}
    </Modal>
  )
}
