const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

const windowOptions = {
    width:1000,
    height:1000,
    resizable:false,
    icon: path.join(__dirname, "/../res/icon.png"),
    show: false
}

const createWindow = () => {
    win = new BrowserWindow(windowOptions);
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true
    });
    win.loadURL(startUrl);
    // win.webContents.openDevTools();
    win.once("ready-to-show", () => {
        win.show();
    });

    win.on("close", () => {
        win = null;
    });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if(process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if(win === null) createWindow();
});