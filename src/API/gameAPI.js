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

export const fetchGamesFromDir = async (event, target) => {
  try {
    const games = await window.electron.invoke('fetchGamesFromDir', [{
      dirPath: 'D:/Emulador/ROMS/PS2',
      fileExtension: 'iso',
    }])

    console.log("games: ", games)

    if (event) event.target.disabled = false
  }
  catch (err) { console.error(err) }
}

export const fetchGameMetadata = async ( event, target ) => {
  if (event) event.target.disabled = true

  try {
    const metadata = await window.electron.invoke('fetchGameMetadata')
    console.log(metadata)

    if (event) event.target.disabled = false
  }
  catch (err) { console.error(err) }
}

