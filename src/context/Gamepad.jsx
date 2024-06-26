import React, { createContext, useEffect, useState } from 'react'
import { gameLoop } from '../utils/gamepadUtils'

export const GamepadContext = createContext()

export const GamepadProvider = ({children}) => {
  const [ connectedGamepad, setConnectedGamepad ] = useState(null)
  const [ activeItemIndex, setActiveItemIndex ] = useState(0)
  const [ orientation, setOrientation ] = useState('horizontal')
  const [ maxItems, setMaxItems ] = useState(0)
  const [ gameLoopOn, setGameLoopOn ] = useState(true)
  const [ gameLoopInterval, setGameLoopInterval ] = useState(null)
  const [ currentContainerElementId, setCurrentContainerElementId ] = useState("#container-1")

  const handleGamepadConnected = event => {
    setConnectedGamepad(event.gamepad)
    console.log('Gamepad connected.')
  }

  const handleGamepadDisconnected = event => {
    setConnectedGamepad(null)
    console.log('Gamepad disconnected.')
  }

  const toNextItem = (nextContainer, nextItem) => {
    if (activeItemIndex < maxItems - 1) setActiveItemIndex(item => item + 1)
    else changeContainer(nextContainer, nextItem)
  }

  const toPrevItem = (prevContainer, nextItem) => {
    if (activeItemIndex > 0)  setActiveItemIndex(item => item - 1)
    else changeContainer(prevContainer, nextItem)
  }

  const changeContainer = (nextContainerId, nextItem) => {
    if (currentContainerElementId !== nextContainerId){
      setCurrentContainerElementId(nextContainerId)

      if (nextItem === 'first') {
        setActiveItemIndex(0)
      }
      else if (nextItem === 'last') {
        const lastItemOfNextContainer = document.querySelector(nextContainerId).querySelectorAll('.navigation-item').length
        setActiveItemIndex(lastItemOfNextContainer)
      }
    }
  }

  const navigate = (direction) => {
    const nextContainerElementId = "#" + document
      .querySelector(currentContainerElementId)
      .getAttribute(`data-${direction}-container`)

      console.log(currentContainerElementId, activeItemIndex)

    switch (orientation) {
      case 'horizontal': 
        if (direction === 'up' || direction === 'down') changeContainer(nextContainerElementId)
        else if (direction === 'right') toNextItem(nextContainerElementId)
        else if (direction === 'left') toPrevItem(nextContainerElementId)
        break
      case 'vertical':
        if (direction === 'right' || direction === 'left') changeContainer(nextContainerElementId, 'first')
        else if (direction === 'down') toNextItem(nextContainerElementId, 'first')
        else if (direction === 'up') toPrevItem(nextContainerElementId, 'last')
        break
      default: return null
    }
  }

  const jumpTo = (targetContainer, targetItem, orientation) => {
    if (targetContainer && targetItem && orientation) {
      setOrientation(orientation)
      setCurrentContainerElementId(targetContainer)
      setActiveItemIndex(+targetItem)
      console.log(currentContainerElementId, activeItemIndex)
    }
  }

  const handle_A = () => document.activeElement.click()
  const handle_B = () => console.log('B pressed')
  const handle_X = () => console.log('X pressed')
  const handle_Y = () => console.log('Y pressed')
  const handle_UP = () => navigate('up')
  const handle_DOWN = () => navigate('down')
  const handle_LEFT = () => navigate('left')
  const handle_RIGHT = () => navigate('right')

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
    const container = document.querySelector(currentContainerElementId)
    const newMaxItems = container?.querySelectorAll('.navigation-item').length

    setMaxItems(newMaxItems)
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

  }, [ activeItemIndex, currentContainerElementId ])

  useEffect(() => {
    window.addEventListener('gamepadconnected', handleGamepadConnected)
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected)

    const allNavigationItems = document.querySelectorAll('.navigation-item')

    allNavigationItems.forEach(item => {
      item.addEventListener('click', (event) => {
        const targetContainer = event.target.parentElement.getAttribute('id')
        const targetItem = event.target.getAttribute('data-navigation-id')
        const targetOrientation =event.target.parentElement.getAttribute('data-orientation') 
        console.log(event.target)
        console.log(targetItem)
        jumpTo("#" + targetContainer, targetItem, targetOrientation)
      })
    })  

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
    <GamepadContext.Provider value={{ jumpTo }}>
      {children}
    </GamepadContext.Provider>
  )
}
