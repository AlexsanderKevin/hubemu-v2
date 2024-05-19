import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { registerDefaultEmulators } from "../../../API/emulatorAPI";
import { GlobalContext } from "../../../context/GlobalContext";
import styles from './ModalAddEmulators.module.css'
import { Folder, FolderSimple } from "@phosphor-icons/react";

const defaultEmulators = [
  { name: 'PCSX2', platform: 'Playstation 2', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  { name: 'Citra', platform: 'Nintendo 3DS', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  { name: 'Cemu', platform: 'Nintendo WiiU', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  { name: 'Ryujinx', platform: 'Nintendo Switch', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  { name: 'MyBoy', platform: 'GBA', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
]

export default function ModalAddEmulators ({ isOpen, setIsOpen }) {
  const { setUpdatedEmulators } = useContext(GlobalContext)
  const [ checkedIndexes, setCheckedIndexes ] = useState([])

  const handleSubmit = async () => {
    // await registerDefaultEmulators()
    setUpdatedEmulators(state => !state)
    setIsOpen(false)
  }

  const handleChange = (event => {
    const { checked, value } = event.target

    if ( checked ) {
      setCheckedIndexes(list => [...list, value])
    }
    else {
      setCheckedIndexes(list => list.filter(item => item !== value))
    }
  })

  return (
    <Modal
      header='Adicionar Emuladores'
      modalOpenState={isOpen}
      labelSubmitButton='Sim'
      labelCancelButton='Não'
      onSubmit={handleSubmit}
      onClose={() => setIsOpen(false)}
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

            { checkedIndexes.includes(index) ? (
              <div className={styles.containerInputDirPath}>
                <FolderSimple weight="bold"/>
                <input
                  id={`input-dirpath-${index}`}
                  name={`input-dirpath-${index}`}
                  className={styles.inputDirPath}
                  type="text" 
                  placeholder={`Ex: C:/emuladores/${emulator.name}`}
                  required
                />
              </div>
            ) : null}
          </label>
        ))}
      </div>
    </Modal>
  )
}
