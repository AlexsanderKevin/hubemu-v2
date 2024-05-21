import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { GlobalContext } from "../../../context/GlobalContext";
import styles from './ModalAddEmulators.module.css'
import { FolderSimple } from "@phosphor-icons/react";
import { findAllEmulators, saveEmulators } from "../../../API/emulatorAPI";

export default function ModalAddEmulators ({ isOpen, setIsOpen, defaultEmulators, setDefaultEmulators }) {
  const { updatedEmulators, setUpdatedEmulators } = useContext(GlobalContext)
  const [ checkedIndexes, setCheckedIndexes ] = useState([])
  const [ newEmulators, setNewEmulators ] = useState([])

  const handleSubmit = async () => {
    await saveEmulators(newEmulators)
    setUpdatedEmulators(state => !state)
    setCheckedIndexes([])
    setNewEmulators([])
    setIsOpen(false)
  }

  const handleChange = (event) => {
    const { checked, value } = event.target

    if ( checked ) {
      setCheckedIndexes(list => [...list, value])
    }
    else {
      setCheckedIndexes(list => list.filter(item => item !== value))
    }
  }

  const handleClose = () => {
    setCheckedIndexes([])
    setIsOpen(false)
  }

  const handleChangeInputDirPath = (event, index) => {
    const newDefaultEmulators = defaultEmulators
    newDefaultEmulators[index].dirPath = event.target.value
    setDefaultEmulators(newDefaultEmulators)
  }

  useEffect(() => {
    const emulatorsToCreate = defaultEmulators.filter((emulator, index) => checkedIndexes.includes(index.toString()))
    setNewEmulators(emulatorsToCreate)
  }, [ checkedIndexes ])


  return (
    <Modal
      header='Adicionar Emuladores'
      modalOpenState={isOpen}
      labelSubmitButton='Sim'
      labelCancelButton='Não'
      onSubmit={handleSubmit}
      onClose={handleClose}
    >
      <div className={styles.emulatorsList}>
        {defaultEmulators.map(( emulator, index ) => (

          <label key={index} className={styles.emulatorCard}>
            <div className={styles.emulatorLabel} >
              <input 
                type="checkbox" 
                value={index} 
                onChange={handleChange}
              />
              { emulator.name }
            </div>

            { checkedIndexes.includes(index.toString()) && (

              <div className={styles.containerInputDirPath}>
                <FolderSimple weight="bold"/>
                <input
                  id={`input-dirpath-${index}`}
                  name={`input-dirpath-${index}`}
                  className={styles.inputDirPath}
                  type="text" 
                  placeholder={`Ex: C:/emuladores/${emulator.name}`}
                  onChange={(event) => handleChangeInputDirPath(event, index)}
                  required
                />
              </div>

            )}
          </label>

        ))}
      </div>
    </Modal>
  )
}
