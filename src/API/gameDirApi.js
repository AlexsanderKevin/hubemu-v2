export const saveGameDir = async (dirPath, name) => {
  // const dirCasa = "D:/Emulador/ROMS/PS2"

  try {
    const newDir = await window.electron.invoke('saveGameDir', [{
      dirPath: dirPath,
      name: name,
    }])

    return newDir
  }
  catch (err) { console.error(err) }
}
