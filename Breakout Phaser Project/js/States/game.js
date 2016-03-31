/*-- Responsible for controlling the flow and creation of the main game logic. --*/

// The game state.
var GameState = function (game)
{};

// Extending the game state.
GameState.prototype =
{
    // Create's and initialises all required assets for the game state.
    create: function ()
    {
        // Initialise game assets.
        this.initGameDefaults();
        this.initObjects();
        this.initAudio();
        this.initInput();
        this.initUI();
    },
    
    // Set's the default game settings and start's the game's physics system.
    initGameDefaults: function ()
    {
        // Boolean to tell if ball is on the paddle.
        ballOnPaddle = true;
        // The number of the lives the player has.
        lives = 3;
        // The current score of the game.
        score = 0;
        
        // Start the arcade physics system for use in-game.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        //  We check bounds collisions against all walls other than the bottom one
        game.physics.arcade.checkCollision.down = false;
    },
    
    // Initialise the objects used within the game.
    initObjects: function ()
    {
        // Tile the starfield background across the game.
        startFieldBackground = game.add.tileSprite(0, 0, 800, 600, 'starfield');
        
        // Create the paddle object.
        paddle = new Paddle(game.world.centerX, 500, 0.5, 0.5, 'breakout', 'paddle_big.png');
        // Add it to the game.
        game.add.existing(paddle);
        
        // Create the ball object.
        ball = new Ball(game.world.centerX, paddle.y - 16, 0.5, 0.5, 'breakout', 'ball_1.png');
        // Add it to the game.
        game.add.existing(ball);
        
        // Create the fake ball object.
        fakeBall = new FakeBall(0, 0, 0.5, 0.5, 'breakout', 'ball_1.png');
        // Add it to the game.
        game.add.existing(fakeBall);
        // Kill it as it isn't needed currently.
        fakeBall.kill();
        
        // Create a group for the bricks.
        bricksGroup = game.add.group();
        // Spawn the brick's.
        this.spawnBricks();
    },
    
    // Spawn's the bricks in rows and adds them to the group.
    spawnBricks: function ()
    {
        // Create a temporary brick holder above the loop to avoid hoisting.
        var brick;

        // Loop through and create individual bricks.
        for (var y = 0; y < 4; y++)
        {
            for (var x = 0; x < 15; x++)
            {
                // Create a brick at the iterated position.
                brick = new Brick(150 + (x * 36), 100 + (y * 52), 0.5, 0.5, 'breakout', 'brick_' + (y+1) + '_1.png');
                // Add the brick to the group.
                bricksGroup.add(brick);
            }
        }
    },
    
    // Create's and set's the game's audio.
    initAudio: function ()
    {
        // Has a music object already been created?
        if(!musicExists)
        {
            // Add the audio to the game.
            bgm = game.add.audio("BGM", 0.5, true);
            // Start the audio.
            bgm.play();
            // A music object has now been created.
            musicExists = true;
        }
        
        // Add the audio to the game.
        paddleBounceSFX = game.add.audio("paddleHit", 0.45);
        breakSFX = game.add.audio("brickHit", 0.4);
        powerupSFX = game.add.audio("powerup", 0.4);
        deathSFX = game.add.audio("death", 0.5);
    },
    
    // Assign's the game's input keys.
    initInput: function ()
    {
        // Assign the space bar to the start ball key.
        startBallKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        // Assign the 'm' key to the mute audio key.
        muteAudioKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
        // Create an event listener for when the mute key is pressed.
        muteAudioKey.onDown.add(this.muteAudio);
        // Assign the 'esc' key to the pause game key.
        pauseGameKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
        // Create an event listener for when the mute key is pressed.
        pauseGameKey.onDown.add(this.pauseGame);
    },
    
    // Create's and set's the game's UI elements.
    initUI: function ()
    {
        // Create and set the score text.
        scoreText = new BitmapText(32, 550, 0, 0, "mainFont", 'score: 0', 20);
        game.add.existing(scoreText);
        
        // Create and set the lives text.
        livesText = new BitmapText(680, 550, 0, 0, "mainFont", 'lives: 3', 20);
        game.add.existing(livesText);
        
        // Create and set the introText.
        introText = new BitmapText(game.world.centerX, 400, 0.5, 0.5, "mainFont", '- press \'space\' to begin -', 20);
        game.add.existing(introText);
    },
    
    // Constantly updates multiple times every frame. (Default 60).
    update: function ()
    {
        // Check for user input.
        this.pollUserInput();
        
        //  Scroll the background
        startFieldBackground.tilePosition.x += 2;
    },
    
    // Checks for input from the user and executes logic based upon it.
    pollUserInput: function ()
    {
        // Is the space bar held down?
        if(startBallKey.isDown)
        {
            // Is the ball currently on the paddle?
            if(ballOnPaddle)
            {
                // Release the ball from the paddle.
                ball.releaseBallFromPaddle();
                // Hide the intro text.
                introText.visible = false;
            }
        }
    },
    
    // Mute's and unmutes the game's audio.
    muteAudio: function ()
    {
        // Switch flag from true to false and vice versa.
        audioIsMuted =!audioIsMuted;
        
        // Is the audio muted?
        if(audioIsMuted)
        {
            // Mute game audio.
            bgm.mute = audioIsMuted;
            console.log("Audio unmuted.");
        }
        // Is the audio unmuted?
        else
        {
            // Unmute game audio.
            bgm.mute = audioIsMuted;
            console.log("Audio muted.");
        }
    },
    
    // Toggle's between pausing and unpausing the game.
    pauseGame: function ()
    {
        // Ternary operator that switches the pause state between true and false.
        game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;
    },
    
    // Re-spawns the next wave of bricks.
    nextWave: function ()
    {
        // Bring the bricks back from the dead.
        bricksGroup.callAll('revive');
    },
    
    // Render's physic's bodies and display's debug info to the window.
//    render: function ()
//    {
//        
//    },
    
    // End's the current game and switches to the game over state.
    gameOver: function ()
    {
        // Start the game over state.
        game.state.start("GameOver");
    },
}