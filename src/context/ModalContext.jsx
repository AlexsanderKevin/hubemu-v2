import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [ openModalSetEmulator, setOpenModalSetEmulator ] = useState(false)
  const [ openModalAddEmulator, setOpenModalAddEmulator ] = useState(false)
  const [ openModalSetDirOfEmulator, setOpenModalSetDirOfEmulator ] = useState(false)
  const [ openModalGameOptions, setOpenModalGameOptions ] = useState(false)
  const [ gameId, setGameId ] = useState(null)
  const [ gameName, setGameName ] = useState(null)
  const [ emulatorId, setEmulatorId ] = useState(null)

  return (
    <ModalContext.Provider value={{
      openModalSetEmulator, setOpenModalSetEmulator,
      openModalAddEmulator, setOpenModalAddEmulator,
      openModalSetDirOfEmulator, setOpenModalSetDirOfEmulator,
      openModalGameOptions, setOpenModalGameOptions,
      gameId, setGameId,
      gameName, setGameName,
      emulatorId, setEmulatorId,
    }}>
      {children}
    </ModalContext.Provider>
  )
}
