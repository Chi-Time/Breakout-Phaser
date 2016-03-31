/*-- Responsible for creating and displaying the menu screen. --*/

// The menu state.
var MenuState = function (game)
{};

// Extending the menu state.
MenuState.prototype =
{
    // Create's and initialises all required assets for the menu state.
    create: function ()
    {
        // Create a listener event for a mouse click or touch and call the function when it occurs.
        game.input.onDown.add(this.startGame);
        
        // Tile the starfield background across the game.
        startFieldBackground = game.add.tileSprite(0, 0, 800, 600, 'starfield');
        
        // Create and set the title text.
        var titleText = new BitmapText(game.world.centerX, 100, 0.5, 0.5, "mainFont", 'BREAKOUT CLONE', 40);
        // Add it to the game.
        game.add.existing(titleText);
        // Create and set the menu text.
        var menuText = new BitmapText(game.world.centerX + 30, 400, 0.5, 0.5, "mainFont", '- Click to continue - \n - Press \'m\' to mute music -', 20);
        game.add.existing(menuText);
        // Create and set the credit text.
        var creditText = new BitmapText(game.world.centerX + 10, 500, 0.5, 0.5, "mainFont", 'Made by James Johnson, Audio: Sansabich, Graphics: Phaser examples library', 15);
        game.add.existing(creditText);
    },
    
    // Start's the game state so that gameplay begins.
    startGame: function ()
    {
        game.state.start("Game");
    },
};