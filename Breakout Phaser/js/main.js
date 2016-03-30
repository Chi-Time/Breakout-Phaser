// The Phaser game object.
var game = new Phaser.Game(800, 600, Phaser.AUTO);

// Create and define the states for the game.
game.state.add("Boot", BootState);
game.state.add("Preload", PreloadState);
game.state.add("Menu", MenuState);
game.state.add("Game", GameState);
game.state.add("GameOver", GameOverState);

// Start the boot state.
game.state.start("Boot");