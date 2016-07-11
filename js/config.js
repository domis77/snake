var config;
function runConfig() {

  config = {
    snakeSpeed: parseInt(document.getElementById('snakeSpeed').value),
    snakeLenght: parseInt(document.getElementById('snakeLenght').value),
    snakeBold: parseInt(document.getElementById('snakeBold').value),

    boardWidth: parseInt(document.getElementById('boardWidth').value),
    boardHeight: parseInt(document.getElementById('boardHeight').value)
  };
};
