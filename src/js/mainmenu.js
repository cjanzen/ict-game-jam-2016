SpaceCatdets.MainMenu = function(){};

SpaceCatdets.MainMenu.prototype = {
  init: function(score) {
    var score = score || 0;
    this.highestScore = this.highestScore || 0;

    this.highestScore = Math.max(score, this.highestScore);
  },
  create: function() {
    this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'space');
    this.background.autoScroll(-20, 0);

    //Intro text & rewrote text render code based on http://phaser.io/examples/v2/demoscene/textwriter
    var text = "Major Tom and Colonel Fluffypants sleep in a box on a farm \n unaware of storm clouds gathering. \n An EF9 tornado sweeps them up and flings them into space. \n  \n Lost in space, you're their only hope to send them home!";
    var style = {font: "30px Verdana", fill: "#fff", align: "center"};
    var intro = this.game.add.text(this.game.width/2, this.game.height/2 - 100, text, style);
    intro.anchor.set(0.5, 0.5);

    //Tap to start text
    var text = "Tap to start";
    var style = {font: "20px Verdana", fill: "#fff", align: "center"};
    var gstart = this.game.add.text(this.game.width/2, this.game.height/2 + 250, text, style);
    gstart.anchor.set(0.5, 0.5);

    //High score
    var text = "Highest score: " + this.highestScore;
    style = {font: "15px Verdana", fill: "#fff", align: "center"};
    var hscore = this.game.add.text(this.game.width/2, this.game.height/2 + 350, text, style);
    hscore.anchor.set(0.5, 0.5);
    },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
  }
};
