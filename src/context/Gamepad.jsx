import React, { createContext, useEffect, useState } from 'react'
import { gameLoop } from '../utils/gamepadUtils'

export const GamepadContext = createContext()

export const GamepadProvider = ({children}) => {
  const [ connectedGamepad, setConnectedGamepad ] = useState(null)
  const [ containerIndex, setContainerIndex ] = useState(0)
  const [ activeItemIndex, setActiveItemIndex ] = useState(0)
  const [ orientation, setOrientation ] = useState('horizontal')
  const [ maxItems, setMaxItems ] = useState(0)
  const [ maxContainers, setMaxContainers ] = useState(0)
  const [ gameLoopOn, setGameLoopOn ] = useState(true)
  const [ gameLoopInterval, setGameLoopInterval ] = useState(null)

  const handleGamepadConnected = event => {
    setConnectedGamepad(event.gamepad)
    console.log('Gamepad connected.')
  }

  const handleGamepadDisconnected = event => {
    setConnectedGamepad(null)
    console.log('Gamepad disconnected.')
  }

  const navigate = (target, direction) => {
    if (target === 'item' && direction === 'forward') {
      setActiveItemIndex(item => (item < maxItems - 1 ? item + 1 : item) )
    }
    else if (target === 'item' && direction === 'backward') {
      setActiveItemIndex(item => (item > 0 ? item - 1 : item) )
    }
    if (target === 'container' && direction === 'forward') {
      setContainerIndex(item => (item < maxContainers - 1 ? item + 1 : item) )
    }
    else if (target === 'container' && direction === 'backward') {
      setContainerIndex(item => (item > 0 ? item - 1 : item) )
    }
  }

  const handle_A = () => document.activeElement.click()
  const handle_B = () => console.log('B pressed')
  const handle_X = () => console.log('X pressed')
  const handle_Y = () => console.log('Y pressed')
  const handle_UP = () => {
    if (orientation === 'horizontal') navigate('container', 'backward')
  }
  const handle_DOWN = () => {
    if (orientation === 'horizontal') navigate('container', 'forward')
  }
  const handle_LEFT = () => {
    if (orientation === 'horizontal') navigate('item', 'backward')
  }
  const handle_RIGHT = () => {
    if (orientation === 'horizontal') navigate('item', 'forward')
  }

  const handleAction = pressedButtons => {
    if (pressedButtons.includes('A')) handle_A()
    if (pressedButtons.includes('B')) handle_B()
    if (pressedButtons.includes('X')) handle_X()
    if (pressedButtons.includes('Y')) handle_Y()
    if (pressedButtons.includes('ARROW_UP')) handle_UP()
    if (pressedButtons.includes('ARROW_DOWN')) handle_DOWN()
    if (pressedButtons.includes('ARROW_LEFT')) handle_LEFT()
    if (pressedButtons.includes('ARROW_RIGHT')) handle_RIGHT()
  }

  useEffect(() => {
    const container = document.querySelector(`[data-navigation-index="${containerIndex}"]`)
    const newMaxItems = container?.querySelectorAll('.navigation-item').length

    setMaxItems(newMaxItems)
    setMaxContainers(document.querySelectorAll('.navigation-container').length)
    setOrientation(container?.getAttribute('data-orientation'))

    let item
    if (activeItemIndex >= newMaxItems) {
      item = container?.querySelectorAll('.navigation-item')[newMaxItems - 1]
      setActiveItemIndex(newMaxItems - 1)
    }
    else {
      item = container?.querySelectorAll('.navigation-item')[activeItemIndex]
    }
    item?.focus()

  }, [ containerIndex, activeItemIndex ])

  useEffect(() => {
    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)
  }, [])

  useEffect(() => {
    if (connectedGamepad && gameLoopOn) {
      const intervalId = setInterval(() => {
        const pressed = gameLoop(connectedGamepad, handleAction, setGameLoopOn)
        if (pressed) handleAction(pressed)
      }, 50)
      
      setGameLoopInterval(intervalId)
    }
    else {
      clearInterval(gameLoopInterval)
      setGameLoopInterval(null)
      setTimeout(() => setGameLoopOn(true), 100)
    }

    return () => clearInterval(gameLoopInterval)
  }, [connectedGamepad, gameLoopOn, setGameLoopInterval])

  return (
    <GamepadContext.Provider value={{}}>
      {children}
    </GamepadContext.Provider>
  )
}
