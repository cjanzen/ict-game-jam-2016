var SpaceCatdets = SpaceCatdets || {};

SpaceCatdets.Preload = function(){};

SpaceCatdets.Preload.prototype = {
  preload: function() {

  //show logo in loading screen -- not my code
  // this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
  // this.splash.anchor.setTo(0.5);
  //
  // this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
  // this.preloadBar.anchor.setTo(0.5);
  //
  // this.load.setPreloadSprite(this.preloadBar);

  //Load game assets
  this.load.image('space', 'assets/images/space.png');
  this.load.image('star', 'assets/images/star.png');
  // this.load.spritesheet('power', 'assets/images/power.png', 12, 12);
  // this.load.image('playerParticle', 'assets/images/player-particle.png');
},
create: function() {
  this.state.start('MainMenu');
}
};
