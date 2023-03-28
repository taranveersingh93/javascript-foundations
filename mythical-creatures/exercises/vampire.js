function createVampire(vampireName, petName) {
  var vampire = {};
  vampire.name = vampireName;
  vampire.pet = "bat";
  vampire.thirsty = true;
  vampire.ouncesDrank = 0;
  if(arguments.length===2) {
    vampire.pet = petName;
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if(vampire.thirsty===true) {
    return `I WANT TO SUCK YOUR BLOOD!`
  } else {
    return `No thanks, I am too full.`
  }
  
}

function drink(vampire) {
  if(vampire.ouncesDrank<50 || vampire.thirsty === true) {
    vampire.ouncesDrank += 10;
  }
  if(vampire.ouncesDrank<50) {
    vampire.thirsty = false; 
  }
  return vampire;
}

function inquirePlace(locations, oneLocation) {
  if(locations.includes(oneLocation)) {
    return `Yes, I have spent some time in ${oneLocation}.`;
  } else {
    return `No, I have never been to ${oneLocation}.`;
  }
}

function findBatLovers(vampires) {
  var batLovers = [];
  for(var i=0; i<vampires.length; i++) {
    if(vampires[i].pet === "bat") {
      batLovers.push(vampires[i].name);
    }
  }
  return batLovers;
}
module.exports = {
  createVampire,
  drink, 
  findBatLovers, 
  encounterDeliciousVictim,
  inquirePlace
}