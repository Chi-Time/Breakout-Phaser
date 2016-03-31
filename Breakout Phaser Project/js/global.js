/* HOLDS ALL GLOBAL VARIABLES FOR THE GAME */

// The ball object.
var ball = {};
// The fake ball object.
var fakeBall = {};
// The paddle object.
var paddle = {};
// The brick group.
var bricksGroup = {};
// The score text object.
var scoreText = {};
// The lives text object.
var livesText = {};
// The intro text object.
var introText = {};
// DEBUG LABEL FOR FPS BENCHMARKING.
var fpsText = {};
// The starfield background image.
var startFieldBackground = {};
// Boolean to tell if ball is on the paddle.
var ballOnPaddle = true;
// Boolean to tell if the fake ball is in the game.
var isFakeInPlay = false;
// Boolean to tell whether the background music has alread been created.
var musicExists = false;
// Boolean to tell if the audio should be muted or not.
var audioIsMuted = false;
// The number of the lives the player has.
var lives = 3;
// The current score of the game.
var score = 0;
// The key to start to release the ball.
var startBallKey = {};
// The key to mute and un-mute game audio.
var muteAudioKey = {};
// The key to pause and un-pause the game.
var pauseGameKey = {};
// The background music.
var bgm = {};
// The death sound effect.
var deathSFX = {};
// The paddle bounce sound effect.
var paddleBounceSFX = {};
// The ball bound sound effect.
var bounceSFX = {};
// The powerup sound effect.
var powerupSFX = {};
// The brick destruction sound effect.
var breakSFX = {};
// The game over sound effect.
var gameOverSFX = {};