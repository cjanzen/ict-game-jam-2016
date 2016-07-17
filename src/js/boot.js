var SpaceCatdets = SpaceCatdets || {};
SpaceCatdets.Boot = function() {};

//Game config & load loading-screen assets
SpaceCatdets.Boot.prototype = {
  preload: function() {
    this.load.image('backdrop', 'assets/images/space.png');
    // this.load.image('logo', 'assets/images/logo.png');
    // this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
  create: function() {
    this.game.stage.backgroundColor = "#000000";

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 240;
    this.scale.minHeight = 170;
    this.scale.maxWidth = 2800;
    this.scale.maxHeight = 1920;

    this.scale.pageAlignHorizontally = true;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.state.start('Preload');
  }
};
