const electron = require('electron'),
	  {app, BrowserWindow} = electron


app.on('ready', () =>{
	 let win = new BrowserWindow({widht:800,height:600})
	 win.loadURL(`file://${__dirname}/index.html`)
})

exports.openWindow = (file) =>{
	let win = new BrowserWindow({widht:800, height:600})
	win.loadURL(`file://${__dirname}/`+ file + `.html`)
}