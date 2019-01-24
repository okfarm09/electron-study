const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let win;

const createWindow = () => {
    win = new BrowserWindow({ width:1000, height:1000 });
    // win.loadFile("public/index2.html");
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true
    });
    win.loadURL(startUrl);
    win.webContents.openDevTools();
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