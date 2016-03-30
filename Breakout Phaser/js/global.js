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