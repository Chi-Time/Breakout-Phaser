// The game state.
var GameState = function (game)
{};

// Extending the game state.
GameState.prototype =
{
    // Create's and initialises all required assets for the game state.
    create: function ()
    {
        console.log("Game State Loaded");
    },
    
    update: function ()
    {
        
    },
    
    render: function ()
    {
        
    },
    
    // End's the current game and switches to the game over state.
    gameOver: function ()
    {
        game.state.start("GameOver");
    },
}