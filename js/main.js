

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

//-----


document.getElementById('start').onclick = function(){
  runConfig();
  var snake = new Snake(config.snakeLenght, config.snakeBold); console.log(snake);
  var board = new Board(config.boardWidth, config.boardHeight);
  var game = new Game(config.snakeSpeed);

  game.start(game, board, snake);
};
