export const playGame = async ( event, target ) => {
  event.target.disabled = true

  try {
    const play = await window.electron.invoke('playGame', [{
      dirPath: 'D:/Emulador/Emuladores/PS2 - PCSX2',
      gamePath: 'D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso',
      exeCommand: 'pcsx2.exe --nogui --fullscreen'
    }])

    event.target.disabled = false
  }
  catch (err) { console.error(err) }
}

export const fetchGamesFromDir = async (dirPath) => {
  const dirFatec = "C:/Users/1050482123033/Downloads"
  const dirCasa = "D:/Emulador/ROMS/PS2"
  try {
    const games = await window.electron.invoke('fetchGamesFromDir', [{
      dirPath: dirPath,
      fileExtension: 'iso',
    }])

    return games
  }
  catch (err) { console.error(err) }
}

export const fetchGameMetadata = async ( target ) => {

  try {
    const metadata = await window.electron.invoke('fetchGameMetadataByName', [{
      gameName: target
    }])
    console.log("Metadata: ", metadata)

  }
  catch (err) { console.error(err) }
}

export const findAllGames = async () => {
  try {
    const games = await window.electron.invoke('findAllGames')
    return games
  }
  catch (err) { console.error(err) }
}

export const saveGames = async (newGames) => {
  try {
    const games = await window.electron.invoke('saveGames', newGames)
    return games
  }
  catch (err) { console.error(err) }
}
