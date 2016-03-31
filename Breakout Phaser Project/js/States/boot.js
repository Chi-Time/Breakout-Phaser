/*-- Responsible for booting the game and preloading required assets for the preload state. --*/

// The boot boot state object.
var BootState = function (game)
{};

// Extend the boot state.
BootState.prototype =
{
    // Preload the required asset's for the preloader.
    preload: function ()
    {
        // Load the required font's.
        game.load.bitmapFont("mainFont", "assets/fonts/mainFont.png", "assets/fonts/mainFont.fnt");
    },
    
    // Create's and initialises all required assets for the boot state.
    create: function ()
    {
        this.startPreload();
    },
    
    // Start's the game's preloading state.
    startPreload: function ()
    {
        game.state.start("Preload");
    }
};