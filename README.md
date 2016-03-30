# Breakout-Phaser
A simple little breakout game made using the Phaser framework. Done as a test and educational piece.

The project is designed as another test of my skills in both JavaScript and Phaser. As always, the code was designed for clarity so people looking for Phaser examples should be able to delve right in and start extending/adapting the code for their projects.

This project was created using the current (as of time of writing) Phaser framework which is currently: **Phaser *2.4.6* "Baerlon**.

Check the dev branch for the latest albeit unstable builds, for stable builds check out the master and for the eventual, minified and published build, check the published branch.

# Short Project GDD

Detailed below is an extremely short and rough game design document.

NOTE: The project has since had to become smaller in scope due to personal reasons. The time allowed for this project is simply too short to add the features planned. The features that have been removed have strikes through them.

## Game Proposal

The game will be a short and simple breakout clone. The objective of the game is for the player to bounce a ball off of a small paddle and hit the various bricks which will be in varying positions based upon the level. The player will be awared points for each brick hit, along with a bonus for clearing a level. If the player loses the ball they lose a life and losing all lives will result in a game over.

As well as varying levels (~~5 currently planned~~) the game will feature some power ups. These power ups will grant powers to the player such as: extra balls in play, ~~shrink the paddle, grow the paddle and slow down the ball~~. The player will also be awarded a new life after every ~~5000~~ 2000 points. The game will cycle through ~~all 5 levels in random order~~ the same wave of bricks until the player dies. At which point the final score will be displayed to them.

## Mechanics

In no particular order here are some of the game mechanics required off of the top of my head.

-  Menu screen.
-  Mute button for audio.
-  Paddle movement.
-  Ball movement.
-  Ball bounce.
-  Brick destruction.
-  Increase score.
-  Increase lives.
-  Decrease lives.
-  Lives system.
-  Game over screen.
-  Final score table.
-  Preloader.
-  ~~Shrink paddle power up.~~
-  ~~Grow paddle power up.~~
-  Extra balls power up.
-  ~~Random level generation.~~
-  Pause button.

## Asset List

Again, in no particular order here is a rough asset list for the game.

-  Paddle sprite.
-  Ball sprite.
-  4 different brick sprites.
-  Background image.
-  Menu/Splash screen.
-  Game font.
-  Text font.
-  Game over screen.
-  3 Different power up sprites.
-  Power up SFX.
-  Ball bounce SFX.
-  Brick destruction SFX.
-  Game over SFX.
-  Background music.