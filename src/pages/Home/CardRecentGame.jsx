import { useContext, useState } from 'react';
import styles from './ListRecents.module.css'
import { Disc, Play } from '@phosphor-icons/react';
import { fetchGameMetadata, playGame, setGameMetadata } from '../../API/gameAPI';
import { ModalContext } from '../../context/ModalContext';

export default function CardRecentGame({ game, ...props }) {
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
      <div className={`${styles.nameLabel}`}>
        <span >{ game.nameClean }</span>
      </div>

      <Disc className={`${styles.bgIcon}`}/>
      <span className={ styles.playLabel }>
        <Play weight='fill'/>
        Iniciar
      </span>
    </button>
  )
}
