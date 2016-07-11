
var Snake = (function() {

    function Snake(lenght, bold){
      this.lenght = lenght;
      this.bold = bold;
      this.snakeBody = [];
    }


    Snake.prototype.getSnakeBody = function(){
      return this.snakeBody;
    };

    Snake.prototype.getBold = function() {
      return this.bold;
    };

    Snake.prototype.getLenght = function() {
      return this.lenght;
    };


    return Snake;
}());
