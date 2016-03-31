// The brick prefab.
var Brick = function (xPos, yPos, anchorX, anchorY, spritekey, frame)
{
    // Call for a sprite object.
    Phaser.Sprite.call(this, game, xPos, yPos, spritekey, frame);
    // Enable the physics for the sprite body.
    game.physics.enable(this, Phaser.Physics.ARCADE);
    // Set the sprite's inital anchor value.
    this.anchor.setTo(anchorX, anchorY);
    // Set the body of the brick to be bouncy.
    this.body.bounce.set(1);
    // Set the brick to be immovable.
    this.body.immovable = true;
};

// Extension of the brick object to become a Phaser sprite.
Brick.prototype = Object.create(Phaser.Sprite.prototype);
// Assign the brick's constructor.
Brick.prototype.constructor = Brick;
