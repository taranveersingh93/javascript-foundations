
function createDragon(dragonName, riderName, behavior) {
  var dragon = {};
  dragon.timesEaten = 0;
  dragon.hungry = true;

  if(arguments.length===1){
    dragon.name = dragonName;
  } else if(arguments.length===2){
    dragon.name = dragonName;
    dragon.rider = riderName;
  } else {
    dragon.name = dragonName;
    dragon.rider = riderName;
    dragon.temperment = behavior;
  }
  return dragon;
}

function greetRider(dragonObj) {
  return `Hi, ${dragonObj.rider}!`;
}

function eat(dragonObj) {
  dragonObj.timesEaten += 1;
  if(dragonObj.timesEaten>=3) {
    dragonObj.hungry = false;
  } 
  return dragonObj;
}

function findFireBreathers(allDragons) {
  var fireBreathers = [];
  for(var i=0; i<allDragons.length; i++) {
    if(allDragons[i]["temperment"] === "aggressive") {
      fireBreathers.push(allDragons[i]);
    }
  }
  return fireBreathers;
}
 
module.exports = {
  createDragon,
  greetRider,
  eat,
  findFireBreathers
}
