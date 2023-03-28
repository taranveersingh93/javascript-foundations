function createHobbit(hobbitName, hobbitAge) {
  var hobbit = {};
  
  if(hobbitName) {
    hobbit.name = hobbitName;
  } else 
  hobbit.name = "unknown";

  if(hobbitAge) {
    hobbit.age = hobbitAge;
  } else {
    hobbit.age = 0;
  }
  
  if(hobbit.age<33) {
    hobbit.isAdult = false;
  } else {
    hobbit.isAdult = true;
  }

  if(hobbit.age<101) {
    hobbit.isOld = false;
  } else {
    hobbit.isOld = true;
  }
  
  hobbit.acquaintances = [];
  hobbit.friends = [];

  return hobbit;
}

function celebrateBirthday (hobbitObj) {
  hobbitObj.age += 1;
  if(hobbitObj.age>32) {
    hobbitObj.isAdult = true;
  }
  if(hobbitObj.age>100) {
    hobbitObj.isOld = true;
  }
  return hobbitObj;
}

function getRing(hobbitObj) {
  if (hobbitObj.name === "Frodo") {
    return `Here is the ring!`
  } else {
    return `You can't have it!`
  }
}

function meetPeople(hobbitObj, people) {
  for(var i=0; i<people.length; i++) {
    hobbitObj.acquaintances.push(people[i]);
  }

  return hobbitObj;
}

function findFriends(hobbitObj) {
  for(var i=0; i<hobbitObj.acquaintances.length; i++) {
    if(hobbitObj.acquaintances[i].relationship === "friend") {
      hobbitObj.friends.push(hobbitObj.acquaintances[i].name);
    }
  }
  return hobbitObj.friends;
}
module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends
}