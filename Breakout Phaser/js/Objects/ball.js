// The ball prefab.
var Ball = function (xPos, yPos, anchorX, anchorY, spriteKey, frame)
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
    
    // Checks the number of lives left and decides the outcome of the game.
    this.stillInPlay = function ()
    {
        // Does the player have no lives left?
        if (lives === 0)
        {
            // Set the game to end.
            GameState.prototype.gameOver();
            // Set the bool flag back to true.
            ballOnPaddle = false;
            // Kill the fake ball as the current game has ended.
            fakeBall.kill();
        }
        // Does the player still have lives.
        else
        {
            // Reset the ball back onto the paddle.
            this.reset(paddle.body.x, paddle.y - 16);

            // Set the bool flag back to true.
            ballOnPaddle = true;

            // Stop all ball animations.
            this.animations.stop();
        }
    };
    
    // Takes a life and reset's the ball when it leaves the game bounds.
    this.ballOutOfBounds = function ()
    {
        paddle.takeLife();
        // Check if the player still has lives left.
        this.stillInPlay();
    };
    
    // Releases the ball from the paddle and into play.
    this.releaseBallFromPaddle = function ()
    {
        // Set the bool flag false.
        ballOnPaddle = false;
        // Set the ball's vertical velocity.
        this.body.velocity.y = -300;
        // Set the ball's horizontal velocity.
        this.body.velocity.x = -75;
        // Play the spin animation.
        this.animations.play('spin');
    };
    
    // Collision handle for when the ball collides with the paddle.
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
        
    };
        
    // Collision handler for when the ball hit's a brick.
    this.ballHitBrick = function (_ball, _brick)
    {
        // Kill the brick that was hit.
        _brick.kill();
        // Randomly select a powerup.
        this.powerupSelect(_ball);
        // Increase the player's score by 10 points.
        this.increaseScore(10);
        // Check if the current wave has been cleared.
        this.checkForWaveClear();
        
    };
    
    // Check's to see if the current wave has been cleared.
    this.checkForWaveClear = function ()
    {
        //  Are there no bricks left?
        if (bricksGroup.countLiving() == 0)
        {
            // Increase the player's score.
            this.increaseScore(1000);
            // The wave is over.
            this.waveOver();
        }
    };
    
    // Reset's the ball and call's for the next wave to be created.
    this.waveOver = function ()
    {
        // Reset the bool flag.
        ballOnPaddle = true;
        // Stop the ball's velocity.
        ball.body.velocity.set(0);
        // Move the ball back to the paddle
        ball.x = paddle.x + 16;
        ball.y = paddle.y - 16;
        // Stop all ball animations.
        ball.animations.stop();
        // Kill the fakeball.
        fakeBall.kill();
        // The fake ball is removed from play.
        isFakeInPlay = false;
        // Start the next wave of bricks.
        GameState.prototype.nextWave();
    };
    
    // Randomly selects a number for a powerup.
    this.powerupSelect = function (_ball)
    {
        // Generate a random number between 0 and 10.
        var randomNumber = Math.floor(Math.random() * (12 - 1 + 0)) + 0;
        
        // Switch this number.
        switch (randomNumber)
        {
                // Is the number 5?
            case 5:
                // Spawn a fakeball.
                fakeBall.spawnBall(_ball.x, _ball.y);
                break;
                // Was it another number?
            default:
                // End execution.
                return;
                break;
        }
    };
    
    // Create an event listener for when the ball get's lost, if it leaves the world bounds call the ballLost function.
    this.events.onOutOfBounds.add(this.ballOutOfBounds, this);
};

Ball.prototype = Object.create(Phaser.Sprite.prototype);
Ball.prototype.constructor = Ball;

Ball.prototype.update = function ()
{
    
    // Is the ball on the paddle?
    if (ballOnPaddle)
    {
        // Set the ball's position to always follow the paddle.
        this.body.x = paddle.x;
    }
    else
    {
        // Check for a collision between the ball and the paddle. If one occurs, call the ballHitPaddle function.
        game.physics.arcade.collide(ball, paddle, this.ballHitPaddle, null, this);
        // Check for a collision between the ball and a brick. If one occurs, call the ballHitBrick function.
        game.physics.arcade.collide(ball, bricksGroup, this.ballHitBrick, null, this);
    }
};