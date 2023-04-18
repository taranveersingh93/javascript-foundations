function createPlayer(inName, inAge, inMoveset) {
  var player = {
    name: inName,
    age: inAge,
    moveset: inMoveset
  };
  return player;
}

function createLevel(levelName, inPlayers) {
  var level = {
    name: levelName,
    players: inPlayers,
    coins: 0,
    lives: 3
  };
  return level;
}

function findCoins(inLevel, inCoins) {
  inLevel.coins += inCoins;
  if(inLevel.coins === 100) {
    inLevel.lives++;
  }
  return inLevel
}

function defeatPlayer(inLevel) {
  inLevel.lives--;
  if(inLevel.lives) {
    return inLevel;
  } else {
    return `GAME OVER`
  }
}

module.exports = { 
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
};