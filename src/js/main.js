var SpaceCatdets = SpaceCatdets || {};
  SpaceCatdets.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.Auto, '');

  SpaceCatdets.game.state.add('Boot', SpaceCatdets.Boot);
  SpaceCatdets.game.state.add('Preload', SpaceCatdets.Preload);
  SpaceCatdets.game.state.add('MainMenu', SpaceCatdets.MainMenu);
  SpaceCatdets.game.state.add('Game', SpaceCatdets.Game);

  SpaceCatdets.game.state.start('Boot');
