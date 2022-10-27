const { app, BrowserWindow } = require("electron");

let mainWindow;

// Cuando la app este ready ejecuta createWindow.
app.on("ready", createWindow);

function createWindow(params) {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //     preload: {

    //     }
    // }
  });

  mainWindow.loadFile("./index.html");
}

/* 
    Para levantar nuestra app nativa ejecutamos el script "npm start" ("electron .")
*/
