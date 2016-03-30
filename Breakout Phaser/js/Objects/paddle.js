// The paddle prefab.
var Paddle = function (xPos, yPos, anchorX, anchorY, spriteKey, frame)
{
    // Call for a sprite object.
    Phaser.Sprite.call(this, game, xPos, yPos, spriteKey, frame);
    // Enable the physics for the sprite body.
	game.physics.enable(this, Phaser.Physics.ARCADE);
    // Set the sprite's inital anchor value.
    this.anchor.set(anchorX, anchorY);
    
    // Allow the paddle to collide with the screen bounds.
    this.body.collideWorldBounds = true;
    // Set the paddle to be bouncy.
    this.body.bounce.set(1);
    // Allow the paddle to be moved.
    this.body.immovable = true;
    
    this.takeLife = function ()
    {
        // Decrement the player's total lives.
        lives--;
        // Update the lives text to reflect the change.
        livesText.text = 'lives: ' + lives;
    };
    
    this.addLife = function ()
    {
        // Decrement the player's total lives.
        lives++;
        // Update the lives text to reflect the change.
        livesText.text = 'lives: ' + lives;
    };
};

// Extension of the paddle object to become a Phaser sprite.
Paddle.prototype = Object.create(Phaser.Sprite.prototype);
// Assign the paddle's constructor.
Paddle.prototype.constructor = Paddle;

Paddle.prototype.update = function ()
{
    // Set the paddle's position to always be set to the mouse's position.
    paddle.x = game.input.x;
    // Is the paddle less than 24 pixels?
    if (paddle.x < 24)
    {
        // Then it cannot move further than this.
        paddle.x = 24;
    }
    // Is the paddle further than the right side of the screen?
    else if (paddle.x > game.width - 24)
    {
        // Then it cannot move further than this.
        paddle.x = game.width - 24;
    }
};
