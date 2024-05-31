import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalPrivider = ({children}) => {
  const [ updatedEmulators, setUpdatedEmulators ] = useState(false)
  const [ updatedGames, setUpdatedGames ] = useState(false)

  // useState(() => {console.log('mudou')}, [updatedEmulators])

  return (
    <GlobalContext.Provider value={{
      updatedEmulators, setUpdatedEmulators,
      updatedGames, setUpdatedGames,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
