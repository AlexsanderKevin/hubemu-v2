import styles from './AnimatedBackground.module.css'
import { ReactComponent as SaturnSvg } from '../../static/svg/svg-saturn.svg'
import { ReactComponent as IlustrationGalaxy } from '../../static/svg/ilustration-galaxy.svg'

export default function AnimatedBackground() {
  return (
    <div className={styles.bg}>
      <SaturnSvg className={`${styles.saturnSvg}`}/>
      <IlustrationGalaxy className={`${styles.ilustrationGalaxy}`}/>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
    </div>
  )
}
