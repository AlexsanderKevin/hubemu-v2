export const findAllEmulators = async (event, target) => {
  if (event) event.target.disabled = true

  try {
    const emulators = await window.electron.invoke('findAllEmulators')
    const response = emulators.map(emulator => emulator.dataValues)
    console.log("emulators: ", response)

    if (event) event.target.disabled = false
    return response
  }
  catch (err) { console.error(err) }
}

export const registerDefaultEmulators = async (event, target) => {
  if (event) event.target.disabled = true

  try {
    const result = await window.electron.invoke('registerDefaultEmulators')
    console.log("registrados: ", result)

    if (event) event.target.disabled = false
    return result
  }
  catch (err) { console.error(err) }

}
