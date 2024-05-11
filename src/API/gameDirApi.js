export const saveGameDir = async (event, target) => {
  const dirCasa = "D:/Emulador/ROMS/PS2"

  try {
    const newDir = await window.electron.invoke('saveGameDir', [{
      dirPath: dirCasa,
      supportedFileExtension: 'iso',
      name: 'Jogos de PS2'
    }])

    console.log("new dir: ", newDir)
  }
  catch (err) { console.error(err) }
}
