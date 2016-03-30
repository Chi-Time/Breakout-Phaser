// The boot boot state object.
var BootState = function (game)
{};

// Extend the boot state.
BootState.prototype =
{
    // Preload's all required assets for the preload state.
    preload: function ()
    {
        //TODO: Load the preload bar.
    },
    
    // Create's and initialises all required assets for the boot state.
    create: function ()
    {
        console.log("Boot State Loaded");
        this.startPreload();
    },
    
    // Start's the game's preloading state.
    startPreload: function ()
    {
        game.state.start("Preload");
    }
};