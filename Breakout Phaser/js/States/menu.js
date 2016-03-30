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
    },
    
    // Start's the game state so that gameplay begins.
    startGame: function ()
    {
        game.state.start("Game");
    },
};