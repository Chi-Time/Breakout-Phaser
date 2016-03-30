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