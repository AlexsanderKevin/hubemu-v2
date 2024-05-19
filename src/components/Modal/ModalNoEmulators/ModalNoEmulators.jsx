import { useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { findAllEmulators, registerDefaultEmulators } from "../../../API/emulatorAPI";
import { GlobalContext } from "../../../context/GlobalContext";

export default function ModalNoEmulators({ isOpen, setIsOpen }) {
  const { setUpdatedEmulators } = useContext(GlobalContext)

  const defaultEmulators = [
    { name: 'PCSX2', platform: 'Playstation 2', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Citra', platform: 'Nintendo 3DS', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Cemu', platform: 'Nintendo WiiU', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'Ryujinx', platform: 'Nintendo Switch', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
    { name: 'MyBoy', platform: 'GBA', exeCommand: 'pcsx2.exe --nogui --fullscreen' },
  ]

  const handleSubmit = async () => {
    await registerDefaultEmulators()
    setUpdatedEmulators(state => !state)
    setIsOpen(false)
  }

  return (
    <Modal
      header='Adicionar Emuladores'
      modalOpenState={isOpen}
      labelSubmitButton='Sim'
      labelCancelButton='Não'
      onSubmit={handleSubmit}
      onClose={() => setIsOpen(false)}
    >
      <p>Deseja adicionar os emuladores padrão?</p>
      <div>
        {defaultEmulators.map(( emulator, index ) => (
          <label key={index} >
            <input type="checkbox" />
            { emulator.name }
          </label>
        ))}
      </div>
    </Modal>
  )
}
