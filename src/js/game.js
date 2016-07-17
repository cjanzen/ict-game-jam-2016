var SpaceCatdets = SpaceCatdets || {};
//Title screen
SpaceCatdets.Game = function() {};

SpaceCatdets.Game.prototype = {
  create: function() {
    //Assign world dimensions
    this.game.world.setBounds(0, 0, 1920, 1920);
    this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'space');
    this.player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    this.player.scale.setTo(2);
    this.player.animations.add('fly, [0, 1, 2, 3], 5, true');
    this.player.animations.play('fly');
    this.player.score = 0;
    this.game.physics.arcade.enable(this.player);
    this.playerSpeed = 120;
    this.player.body.collideWorldBounds = true;

    this.game.camera.follow(this.player);

    this.generateCollectables();
    this.generateAsteroids();
    this.showLabels();
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.physics.arcade.moveToPointer(this.player, this.playerSpeed);
    }
  },
  generateCollectables: function() {
    this.collectables = this.game.add.group();

    this.collectables.enableBody = true;
    this.collectables.physicsBodyType = Phaser.Physics.ARCADE;

    var numCollectables = this.game.rnd.integerInRange(50, 100);
    var collectable;

    for (var i=0; i < numCollectables; i++) {
      collectable = this.collectable.create(this.game.world.randomX, this.game.world.randomY, 'power');
      collectable.animations.add('fly, [0, 1, 2, 3], 5, true');
      collectable.animations.play('fly');
      }
    },
  generateAsteroids: function() {
    this.asteroids = this.game.add.group();

    this.asteroids.enableBody = true;
    this.asteroids.physicsBodyType = Phaser.Physics.ARCADE;

    var numAsteroids = this.game.rnd.integerInRange(100, 150)
    var asteroid;

    for (var i = 0; i < numAsteroids; i++) {
      asteroid = this.asteroids.create(this.game.world.randomX, this.game.world.randomY, 'rock');
      asteroid.scale.setTo(this.game.rnd.integerInRange(10, 40)/10);

      asteroid.body.velocity.x = this.game.rnd.integerInRange(-20, 20);
      asteroid.body.velocity.y = this.game.rnd.integerInRange(-20, 20);
      asteroid.body.immovable = true;
      asteroid.body.collideWorldBounds = true;
    }
    },
  hitAsteroid: function(player, asteroid) {
      //kill the player
      var emitter = this.game.add.emitter(this.player.x, this.player.y, 100);
      emitter.makeParticles('playerParticle');
      emitter.minParticleSpeed.setTo('-200, -200');
      emitter,maxParticleSpeed.setTo('-200, -200');
      emitter.gravity = 0;
      emitter.start(true, 1000, null, 100);
      this.player.kill();

      this.game.time.events.add(800, this.gameOver, this);
    },
  collect: function(player, collectable) {
      this.playerScore++;
      collectable.kill();
    },
  showLabels: function() {
      var text = "0";
      var style = { font: "15px Verdana", fill: "#fff", align: "center" };
      this.scoreLabel = this.game.add.text(this.game.width - 50, this.game.height - 50, text, style);
      this.scoreLabel.fixedToCamera = true;
      this.scoreLabel.text - this.playerScore;
    },
  gameOver: function() {
      this.game.state.start('MainMenu', true, false, this.playerScore);
  }
};
