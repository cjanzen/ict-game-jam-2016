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
    var text = "The Major and Colonel sleep in a box on the farm \n unaware as storm clouds gather. \n After passing Area 51, an EF9 tornado sweeps them up, \n A UFO in unwrapping storage plastic \n slams into the box, startingly the cats awake. \n  \n You are the Major. Do you grab the trailing plastic or stay in the box?";
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
