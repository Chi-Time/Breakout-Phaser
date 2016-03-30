// The preload state.
var PreloadState = function (game)
{};

// Extending the preload state.
PreloadState.prototype =
{
    // Preloads all required assets for the game.
    preload: function ()
    {
        console.log("Preload State Loaded");
        
        // Load the required game images.
        game.load.atlas('breakout', 'assets/sprites/breakout.png', 'assets/sprites/breakout.json');
        game.load.image('starfield', 'assets/sprites/starfield.png');
        
        // Simple debug loading label.
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});
        
        //TODO: Create and add loadingBar sprite.
    },
    
    // Create's and initialises all required assets for the preload state. (Called directly after preload has finished.)
    create: function ()
    {
        this.showMenu();
    },
    
    // Show's the game's main menu state.
    showMenu: function ()
    {
        game.state.start("Menu");
    },
};