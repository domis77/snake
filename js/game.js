var Game = (function() {

    function Game(speed){
      this.speed = speed;
      this.snakeDirection = 'E';
    }

    Game.prototype.getSnakeDirection = function(){
      return this.snakeDirection;
    }

    Game.prototype.setSnakeDirection = function(snakeDirection){
      this.snakeDirection = snakeDirection;
    }

    Game.prototype.start = function(game, board, snake){
      game.drawBoard(board);
      game.drawSnakeRandomPlace(board, snake);

      game.snakeMove(game, board, snake);
      game.listenKeyEvent(game);
    }


    Game.prototype.drawBoard = function(board) {
      ctx.fillStyle = "black";
      ctx.strokeRect(0, 0,  board.getWidth() , board.getHeight());
    };


    Game.prototype.drawSnakeRandomPlace = function(board, snake) {
      var beginX = board.getWidth();
      while(beginX > board.getWidth()/2 ){
        beginX = Math.round(Math.random() * board.getWidth());
      };

      var beginY = board.getHeight();
      while(beginY > board.getHeight()-snake.getBold()){
        beginY =  Math.round(Math.random() * board.getHeight());
      };

      for(var i=0; i<snake.getLenght(); i++){
        ctx.fillRect(beginX, beginY , snake.getBold(), snake.getBold());
        snake.getSnakeBody().push({beginX, beginY});
        beginX += snake.getBold();
      };
    };
//----------------



    Game.prototype.listenKeyEvent = function(game){
      window.addEventListener("keydown", function(key) {
        switch(key.key){
          case "ArrowRight":
            if(game.getSnakeDirection() == 'W') break;
            game.setSnakeDirection('E');
            break;

          case "ArrowLeft":
            if(game.getSnakeDirection() == 'E') break;
            game.setSnakeDirection('W');
            break;

          case "ArrowUp":
            if(game.getSnakeDirection() == 'S') break;
            game.setSnakeDirection('N');
            break;

          case "ArrowDown":
            if(game.getSnakeDirection() == 'N') break;
            game.setSnakeDirection('S');
            break;
        };
      });
    };



    Game.prototype.snakeMove = function(game, board, snake){
      setInterval(function () {
        game.calculatePixels(game, board, snake);

        ctx.clearRect(snake.getSnakeBody()[0].beginX, snake.getSnakeBody()[0].beginY, snake.getBold(), snake.getBold() );

        snake.getSnakeBody().shift();
        snake.getSnakeBody().push({beginX: movePixelX, beginY: movePixelY});

        ctx.fillRect(movePixelX, movePixelY,  snake.getBold(),  snake.getBold());
      }, this.speed);
    };


    Game.prototype.calculatePixels = function(game, board, snake){
      if(game.getSnakeDirection() == 'E'){
        movePixelX = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginX + snake.getBold();
        movePixelY = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginY;
      };

      if(game.getSnakeDirection() == 'W'){
        movePixelX = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginX - snake.getBold();
        movePixelY = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginY;
      };

      if(game.getSnakeDirection() == "N"){
        movePixelX = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginX;
        movePixelY = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginY - snake.getBold();
      };

      if(game.getSnakeDirection() == "S"){
        movePixelX = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginX;
        movePixelY = snake.getSnakeBody()[snake.getSnakeBody().length-1].beginY + snake.getBold();
      };

      if(movePixelX > board.getWidth() - 6)
        movePixelX = 2;
      else if(movePixelX < 0)
         movePixelX = board.getWidth() - 6;

      if(movePixelY > board.getHeight() - 6)
        movePixelY = 2;
      else if(movePixelY < 0)
        movePixelY = board.getHeight() - 6;
    };


    return Game;
}());
