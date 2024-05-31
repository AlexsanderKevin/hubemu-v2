import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [ openModalSetEmulator, setOpenModalSetEmulator ] = useState(false)
  const [ gameId, setGameId ] = useState(null)

  return (
    <ModalContext.Provider value={{
      openModalSetEmulator, setOpenModalSetEmulator,
      gameId, setGameId,
    }}>
      {children}
    </ModalContext.Provider>
  )
}
