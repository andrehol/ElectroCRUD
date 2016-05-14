'use strict';
var electron = require('electron');
var app = electron.app;

//require('electron-debugger')();

var mainWindow;
function onClosed() {
        // dereference the window
        // for multiple windows store them in an array
        mainWindow = null;
}

function createMainWindow() {
        var win = new electron.BrowserWindow({
                width: 800,
                height: 600,
                minWidth: 800
        });

        win.loadURL('file://'+__dirname+'/index.html');
        //win.loadURL('about:blank');
        win.on('closed', onClosed);

        return win;
}

app.on('window-all-closed', function() {
        if (process.platform !== 'darwin') {
                app.quit();
        }
});

app.on('activate', function() {
        if (!mainWindow) {
                mainWindow = createMainWindow();
        }
});

app.on('ready', function() {
        mainWindow = createMainWindow();
});
