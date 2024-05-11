import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(true)

  return (
    <ModalContext.Provider value={{
      modalIsOpen, setModalIsOpen
    }}>
      {children}
    </ModalContext.Provider>
  )
}
