var menubar = require('menubar');
var Menu = require('menu');

var mb = menubar({dir: __dirname});

var menu_template = [{
	label: 'SoundBar',
    submenu: [
      {
        label: 'Quit',
        selector: 'quitSoundBar'
      },
      {
        type: 'separator'
      }
    ]
}];

mb.on('ready', function ready () {
	console.log("Running SoundBar");

	var menu = new Menu();
	var menu = Menu.buildFromTemplate(menu_template);
	Menu.setApplicationMenu(menu); // Must be called within app.on('ready', function(){ ... });
	
	//mb.app.quit();
})


