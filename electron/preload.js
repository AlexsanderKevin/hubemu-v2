const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  invoke: async (channel, ...args) => {
    return await ipcRenderer.invoke(channel, ...args)
  }
})
