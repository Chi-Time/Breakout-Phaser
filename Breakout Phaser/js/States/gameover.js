// The game over state.
var GameOverState = function (game)
{};

// Extending the game over state.
GameOverState.prototype =
{
    // Create's and initialises all required assets for the game over state.
    create: function ()
    {
        console.log("Game Over State Loaded");
        game.world.removeAll();
        // Create a listener event for a mouse click or touch and call's the function when it occurs.
        game.input.onDown.add(this.restart);
    },
    
    // Restarts the game state so that gameplay begins fresh and from the beginning.
    restart: function ()
    {
        game.state.start("Game");
    },
}