import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { findAllGames } from "../../API/gameAPI"
import styles from "./Library.module.css"
import CardGame from "../../components/CardGame/CardGame"
import { Disc, Play } from "@phosphor-icons/react"

export default function Library () {
  const [ gameMatrix, setGameMatrix ] = useState([])
  const { updatedGames } = useContext(GlobalContext)

  useEffect(() => {
    const fetchGames  = async () => {
      const games = await findAllGames()
      let matrix = []

      for (let i = 0; i < games.length; i+=5) {
        matrix.push(games.slice(i, i+ + 5))
      }

      console.log(matrix)
      setGameMatrix(matrix)
    }

    fetchGames()
  }, [ updatedGames ])

  return(
    <div
      className={styles.library}
    >
      {gameMatrix.length && gameMatrix.map((row, indexRow) => (
        <div
          key={indexRow}
          className={styles.row}
          id={'container-' + (indexRow + 1)}
          data-navigation-index={indexRow.toString()} 
          data-orientation="horizontal" 
          data-left-container="navigation-menu"
          data-right-container={"container-" + (indexRow + 1)}
          data-up-container={
            indexRow === 0 
            ? "container-" + (indexRow + 1) 
            : "container-" + indexRow 
          }
          data-down-container={
            gameMatrix.length > (indexRow + 1)
            ? "container-" + (indexRow + 2)
            : "container-" + (indexRow + 1)
          }
        >
          {row.map((game, indexGame) => (
            <CardGame
              key={indexGame}
              game={game}
            >
              <div className={`${styles.nameLabel}`}>
                <span >{ game.nameClean }</span>
              </div>

              <span className={ styles.playLabel }>
                <Play weight='fill'/>
                Iniciar
              </span>
            </CardGame>
          ))}
        </div>
      ))}
    </div>
  )
}
