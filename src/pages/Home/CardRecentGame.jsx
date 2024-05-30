import { useState } from 'react';
import styles from './ListRecents.module.css'
import { Disc, Play } from '@phosphor-icons/react';
import { fetchGameMetadata, setGameMetadata } from '../../API/gameAPI';

export default function CardRecentGame({ game, ...props }) {
  const [ provisionalBg, setProvisionalBg ] = useState('')

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

  return (
    <button 
      className='navigation-item' 
      // onClick={event => playGame(event, item)} 
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
