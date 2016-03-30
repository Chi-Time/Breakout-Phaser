// The game over state.
var GameOverState = function (game)
{};


GameOverState.prototype =
{
    // Create's and initialises all required assets for the game over state.
    create: function ()
    {
        console.log("Game Over State Loaded");
    },
    
    // Restarts the game state so that gameplay begins fresh and from the beginning.
    restart: function ()
    {
        game.state.start("Game");
    },
}