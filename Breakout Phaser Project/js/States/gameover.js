/*-- Responsible for controlling the flow and creation of the game over screen logic. --*/

// The game over state.
var GameOverState = function (game)
{};

// Extending the game over state.
GameOverState.prototype =
{
    // Create's and initialises all required assets for the game over state.
    create: function ()
    {
        // Tile the starfield background across the game.
        startFieldBackground = game.add.tileSprite(0, 0, 800, 600, 'starfield');
        
        // Create and set the introText.
        var titleText = new BitmapText(game.world.centerX, 100, 0.5, 0.5, "mainFont", 'GAME OVER', 30);
        game.add.existing(titleText);
        // Create and set the introText.
        var finalScoreText = new BitmapText(game.world.centerX + 10, 300, 0.5, 0.5, "mainFont", 'Your final score is: ' + score, 20);
        game.add.existing(finalScoreText);
        // Create and set the introText.
        var infoText = new BitmapText(game.world.centerX, 500, 0.5, 0.5, "mainFont", '- Click to restart -', 20);
        game.add.existing(infoText);
        
        // Create a listener event for a mouse click or touch and call the function when it occurs.
        game.input.onDown.add(this.restart);
    },
    
    // Constantly updates multiple times every frame. (Default 60).
    update: function ()
    {
        //  Scroll the background
        startFieldBackground.tilePosition.y += 2;
    },
    
    // Restarts the game state so that gameplay begins fresh and from the beginning.
    restart: function ()
    {
        game.state.start("Game");
    },
}