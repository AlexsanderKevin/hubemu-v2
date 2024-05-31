export const findAllEmulators = async (event, target) => {
  if (event) event.target.disabled = true

  try {
    const emulators = await window.electron.invoke('findAllEmulators')
    // const response = emulators.map(emulator => emulator.dataValues)

    if (event) event.target.disabled = false
    console.log(emulators)
    return emulators
  }
  catch (err) { console.error(err) }
}

export const saveEmulators = async (newEmulators) => {

  try {
    const result = await window.electron.invoke('saveEmulators', newEmulators)

    return result
  }
  catch (err) { console.error(err) }
}

export const registerDefaultEmulators = async (event, target) => {
  if (event) event.target.disabled = true

  try {
    const result = await window.electron.invoke('registerDefaultEmulators')

    if (event) event.target.disabled = false
    return result
  }
  catch (err) { console.error(err) }

}
