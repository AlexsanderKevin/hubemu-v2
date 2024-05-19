import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalPrivider = ({children}) => {
  const [ updatedEmulators, setUpdatedEmulators ] = useState(false)

  useState(() => {console.log('mudou')}, [updatedEmulators])

  return (
    <GlobalContext.Provider value={{
      updatedEmulators, setUpdatedEmulators,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
