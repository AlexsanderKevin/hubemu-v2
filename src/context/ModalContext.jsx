import { createContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
  const [ modalIsOpen, setModalIsOpen ] = useState(true)

  const openModal = component => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{
      modalIsOpen, setModalIsOpen, openModal, closeModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}
