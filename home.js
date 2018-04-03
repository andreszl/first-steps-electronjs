const remote = require('electron').remote,
	  main = remote.require('./index.js')

var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
	var win = remote.getCurrentWindow() 
	main.openWindow('pageTwo')
	win.close()
}, false)

document.body.appendChild(button)