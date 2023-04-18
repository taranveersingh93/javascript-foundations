function createTape(inTitle, inReady) {
  var tape = {
    title: inTitle,
    readyToPlay: inReady || false
  }
return tape;
}

function reset(inTape) {
  inTape.readyToPlay = true;
  return inTape
}

function createCollection(inTitles) {
  var collection = [];
    if(inTitles.length) {
      for(var i = 0; i < inTitles.length; i++) {
        collection.push(inTitles[i].title);
      }
    } else {
      collection = `Your collection is empty`;
    }
  
  return collection;
}



module.exports = { 
  createTape,
  reset,
  createCollection
 }
