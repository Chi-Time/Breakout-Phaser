// The fakeball prefab.
var FakeBall = function (xPos, yPos, anchorX, anchorY, spriteKey, frame)
{
    // Call for a sprite.
    Phaser.Sprite.call(this, game, xPos, yPos, spriteKey, frame);
    // Enable arcade physics on the ball.
    game.physics.enable(this, Phaser.Physics.ARCADE);
    // Set the ball's default anchors.
    this.anchor.setTo(anchorX, anchorY);
    
    // Check to make sure that the ball is within the world bounds.
    this.checkWorldBounds = true;
    // Allow the ball to collide with the screen bounds.
    this.body.collideWorldBounds = true;
    // Set the ball to be bouncy.
    this.body.bounce.set(1);
    // Add the animations for the ball.
    this.animations.add('spin', [ 'ball_1.png', 'ball_2.png', 'ball_3.png', 'ball_4.png', 'ball_5.png' ], 50, true, false);
    
    // Increases the player's overall score.
    this.increaseScore = function (_score)
    {
        // Increase the player's score.
        score += _score;
        
        // Is the score a multiple of 2000?
        if(score % 2000 == 0)
        {
            // Award the player a life.
            paddle.addLife();
        }
        
        // Update the score text.
        scoreText.UpdateText("score: " + score);
    };
    
    // Takes a life and reset's the ball when it leaves the game bounds.
    this.ballOutOfBounds = function ()
    {
        // Remove this object from the game.
        this.kill();
        // The fake ball is killed and so it isn't in play.
        isFakeInPlay = false;
    };
    
    // Re-spawns the ball at the designated position. (Default is 0, 0)
    this.spawnBall = function (xPos, yPos)
    {
        // Is the ball currently in play?
        if(!isFakeInPlay)
        {
            // Reset the fake ball.
            this.reset(xPos, yPos);
            // Set the ball's vertical velocity.
            this.body.velocity.y = -300;
            // Set the ball's horizontal velocity.
            this.body.velocity.x = -75;
            // Play the spin animation.
            this.animations.play('spin');
            // The fake ball is spawned and so it is in play.
            isFakeInPlay = true;
        }
    };
    
    // Collision handle for when the fake ball collides with the paddle.
    this.ballHitPaddle = function (_ball, _paddle)
    {
        // The difference between the ball and the paddle.
        var diff = 0;

        // If the ball is on the left side of the paddle.
        if (_ball.x < _paddle.x)
        {
            // Ball is on the left-hand side of the paddle
            diff = _paddle.x - _ball.x;
            // Then fire the ball at a left angle.
            _ball.body.velocity.x = (-10 * diff);
        }
        // If the ball is on the right side of the paddle.
        else if (_ball.x > _paddle.x)
        {
            //  Ball is on the right-hand side of the paddle
            diff = _ball.x -_paddle.x;
            // Then fire the ball at a right angle.
            _ball.body.velocity.x = (10 * diff);
        }
        // If the ball is in the middle of the paddle.
        else
        {
            //  Add a little random X velocity to stop it bouncing straight up.
            _ball.body.velocity.x = 2 + Math.random() * 12;
        }
        // Play the bounce sound effect.
        paddleBounceSFX.play();
    };
        
    // Collision handler for when the fake ball collides with a brick.
    this.ballHitBrick = function (_ball, _brick)
    {
        // Kill the brick that was hit.
        _brick.kill();
        // Increase the player's score by ten.
        this.increaseScore(10);
        // Check if the current wave is cleared.
        ball.checkForWaveClear();
        // Play the brick destruction sound effect.
        breakSFX.play();
    };
    
    // Create an event listener for when the ball get's lost, if it leaves the world bounds call the ballLost function.
    this.events.onOutOfBounds.add(this.ballOutOfBounds, this);
};

FakeBall.prototype = Object.create(Phaser.Sprite.prototype);
FakeBall.prototype.constructor = FakeBall;

FakeBall.prototype.update = function ()
{
    // Check for a collision between the ball and the paddle. If one occurs, call the ballHitPaddle function.
    game.physics.arcade.collide(fakeBall, paddle, this.ballHitPaddle, null, this);
    // Check for a collision between the ball and a brick. If one occurs, call the ballHitBrick function.
    game.physics.arcade.collide(fakeBall, bricksGroup, this.ballHitBrick, null, this);
};