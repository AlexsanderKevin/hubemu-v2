export const gameLoop = (connectedGamepad, handleAction, setGameLoopOn) => {
  const gamepad = navigator.getGamepads()[connectedGamepad.index]
  const pressed = gamepad.buttons
    .map(( button, index ) => button.pressed && mapButton(index))
    .filter( button => button )

  if (pressed.length) {
    setGameLoopOn(false)
    return pressed
  }
}

export const mapButton = index => {
  switch (index) {
    case 0: return 'A'
    case 1: return 'B'
    case 2: return 'X'
    case 3: return 'Y'
    case 12: return 'ARROW_UP'
    case 13: return 'ARROW_DOWN'
    case 14: return 'ARROW_LEFT'
    case 15: return 'ARROW_RIGHT'
    default: return null
  }
}
