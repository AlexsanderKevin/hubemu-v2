export const findAllEmulators = async (event, target) => {
  try {
    const emulators = await window.electron.invoke('findAllEmulators')
    const response = emulators.map(emulator => emulator.dataValues)
    console.log("emulators: ", response)

    if (event) event.target.disabled = false
    return response
  }
  catch (err) { console.error(err) }
}
