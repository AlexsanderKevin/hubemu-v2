import styles from './AnimatedBackground.module.css'
// import saturnSvg from '../../static/svg/svg-saturn.svg'
import { ReactComponent as SaturnSvg } from '../../static/svg/svg-saturn.svg'
// import ilustrationGalaxy from '../../static/svg/ilustration-galaxy.svg'
import { ReactComponent as IlustrationGalaxy } from '../../static/svg/ilustration-galaxy.svg'
// import { ReactComponent as MySVG } from './my-svg.svg';

export default function AnimatedBackground() {
  return (
    <div className={styles.bg}>
      <SaturnSvg className={`${styles.saturnSvg}`}/>
      {/* <img 
        src={saturnSvg}
        className={`${styles.saturnSvg}`}
        alt='saturn illustration'
      /> */}
      <IlustrationGalaxy className={`${styles.ilustrationGalaxy}`}/>
      {/* <img 
        src={ilustrationGalaxy}
        className={`${styles.ilustrationGalaxy}`}
        alt='galaxy illustration'
      /> */}
      <div className={styles.square}></div>
      <div className={styles.square}></div>
      <div className={styles.square}></div>
    </div>
  )
}
