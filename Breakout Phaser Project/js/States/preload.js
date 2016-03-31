/*-- Responsible for preloading all required game assets and displaying a simple loading prompt. --*/

// The preload state.
var PreloadState = function (game)
{};

// Extending the preload state.
PreloadState.prototype =
{
    // Preloads all required assets for the game.
    preload: function ()
    {
        // Load the required game images.
        game.load.atlas("breakout", "assets/sprites/breakout.png", "assets/sprites/breakout.json");
        game.load.image("starfield", "assets/sprites/background.png");
        // Load the required audio files.
        game.load.audio("BGM", "assets/audio/Infinite Sensations.ogg");
        game.load.audio("paddleHit", "assets/audio/paddleHit.ogg");
        game.load.audio("brickHit", "assets/audio/brickHit.ogg");
        game.load.audio("powerup", "assets/audio/powerup.ogg");
        game.load.audio("death", "assets/audio/death.ogg");
        
        // Create and set the loading label.
        var loadingLabel = new BitmapText(game.world.centerX + 10, 500, 0.5, 0.5, "mainFont", 'loading...', 15);
        // Add the loading label to the game.
        game.add.existing(loadingLabel);
    },
    
    // Create's and initialises all required assets for the preload state. (Called directly after preload has finished.)
    create: function ()
    {
        this.showMenu();
    },
    
    // Transitions to the game's main menu state.
    showMenu: function ()
    {
        game.state.start("Menu");
    },
};