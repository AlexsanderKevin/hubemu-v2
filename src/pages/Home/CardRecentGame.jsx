import styles from './ListRecents.module.css'
import { Disc, Play } from '@phosphor-icons/react';
import CardGame from '../../components/CardGame/CardGame';

export default function CardRecentGame({ game, ...props }) {
  return (
    <CardGame 
      game={game} 
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
    </CardGame>
  )
}
