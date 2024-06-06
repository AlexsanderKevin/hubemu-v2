import { useContext, useState } from "react"
import { ModalContext } from "../../context/ModalContext"
import { fetchGameMetadata, playGame, setGameMetadata } from "../../API/gameAPI"

export default function CardGame({ game, children, ...props }) {
  const [ provisionalBg, setProvisionalBg ] = useState('')
  const { 
    setOpenModalSetEmulator, 
    setGameId, 
    setEmulatorId,
    setOpenModalSetDirOfEmulator,
  } = useContext(ModalContext)

  useState(() => {
    const getMetadata = async name => {
      const metadata = await fetchGameMetadata(name)
      setProvisionalBg(metadata.background_image)
      await setGameMetadata({
        id: game.id,
        backgroundImgUrl: metadata.background_image,
        screenshotImgUrl: metadata.short_screenshot,
        idRawgApi: metadata.id,
      })
    }

    if ( !game.backgroundImgUrl || !game.screenshotImgUrl) {
      getMetadata(game.name)
    }
  }, [])

  const handleClick = (event) => {
    if (game.emulatorId && game.emulator.dirPath) {
      playGame(event, game)
    }
    else if (game.emulatorId && !game.emulator?.dirPath) {
      setEmulatorId(game.emulatorId)
      setOpenModalSetDirOfEmulator(true)
    }
    else {
      setOpenModalSetEmulator(true)
      setGameId(game.id)
    }
  }

  return (
    <button 
      className='navigation-item' 
      onClick={event => handleClick(event)} 
      style={{
        backgroundImage: 'url(' + (game.backgroundImgUrl ? game.backgroundImgUrl : provisionalBg) + ')',
      }}
      {...props}
    >
      {children}
    </button>
  )
}
