// The menu state.
var MenuState = function (game)
{};

// Extending the menu state.
MenuState.prototype =
{
    // Create's and initialises all required assets for the menu state.
    create: function ()
    {
        console.log("Menu State Loaded");
        
        // Create a listener event for a mouse click or touch and call's the function when it occurs.
        game.input.onDown.add(this.startGame);
        
        // Simple debug menu label.
		var menuLabel = game.add.text(400, 300, 'Click to continue', {font: '30px Courier', fill: '#ffffff'});
    },
    
    // Start's the game state so that gameplay begins.
    startGame: function ()
    {
        game.state.start("Game");
    },
};