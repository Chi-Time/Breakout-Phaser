// A bitmap text prefab from which a bitmap text object can be created.
var BitmapText = function (_xPos, _yPos, _anchorX, _anchorY, _font, _text, _size)
{
    // Call for a bitmap text.
    Phaser.BitmapText.call(this, game, _xPos, _yPos, _font, _text, _size);
    // Set the bitmap text's default anchors.
    this.anchor.setTo(_anchorX, _anchorY);
    
    // Update's the text to reflect what is typed in.
    this.UpdateText = function (_textToShow)
    {
        // Set the text of this object to the string passed in.
        this.text = _textToShow;
    };
}

// Extension of the paddle object to become a Phaser bitmap text.
BitmapText.prototype = Object.create(Phaser.BitmapText.prototype);
// Assign the paddle's constructor.
BitmapText.prototype.constructor = BitmapText;