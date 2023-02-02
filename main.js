const {app, BrowserWindow} = require('electron') //импорт

function createWindow(){                        // функцтя создания окна
    const mainWindow = new BrowserWindow({
    width: 1024,
    height: 868,
    show: false,
    backgroundColor: '#ffffff'
})
   mainWindow.loadURL("https://gitlab.com/Astreyaa")

   mainWindow.once('ready-to-show', mainWindow.show)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {             //стрелочная функция позволяющая закрывает окно
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () =>{                                   //если окон нет, тогда мы его создаем
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})