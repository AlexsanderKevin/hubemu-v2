import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { ModalContext } from "../../../context/ModalContext";
import { findAllEmulators } from "../../../API/emulatorAPI";
import styles from './ModalSetEmulator.module.css'
import { Joystick } from "@phosphor-icons/react";
import { setGameEmulator } from "../../../API/gameAPI";
import { GlobalContext } from "../../../context/GlobalContext";

export default function ModalSetEmulator() {
  const [ emulatorList, setEmulatorList ] = useState([])
  const { openModalSetEmulator, setOpenModalSetEmulator, gameId } = useContext(ModalContext)
  const { setUpdatedGames, updatedEmulators } = useContext(GlobalContext)


  useEffect(() => {
    const fetchEmulators = async () => {
      const emulators = await findAllEmulators()
      setEmulatorList(emulators)
    }

    fetchEmulators()
  }, [ updatedEmulators ])

  const handleSubmit = async (gameId, emulatorId) => {
    await setGameEmulator(gameId, emulatorId)
    setUpdatedGames(state => !state)
  }

  const handleClose = () => {
    setOpenModalSetEmulator(false)
  }

  return (
    <Modal
      header='Selecione o Emulador'
      modalOpenState={openModalSetEmulator}
      labelCancelButton={'Cancelar'}
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      <div className={styles.emulatorList}>
        { emulatorList.map((emulator, index) => (
          <button
            key={index}
            onClick={() => handleSubmit(gameId, emulator.id)}
          >
            <span className={styles.labelName}><Joystick weight="fill"/> {emulator.name}</span>
            <span className={styles.labelPlatform}>{emulator.platform}</span>
          </button>
        ))}
      </div>
    </Modal>
  )
}
