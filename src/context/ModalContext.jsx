import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(true)

  const activateModal = component => {
    setModalIsOpen(true)
  }

  const deactivateModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      modalIsOpen, setModalIsOpen, activateModal, deactivateModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}
