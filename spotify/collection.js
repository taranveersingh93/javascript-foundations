function createCollection(inName, inDescription) {
  var collection = {
    name: inName,
    description: inDescription,
    tracks: []
  }
  return collection;
}

function createTrack(inTitle, inArtist, inDuration) {
  var track = {
    title: inTitle || "unknown",
    artist: inArtist || "unknown",
    duration: inDuration || 0
  };
  return track;
}

function reviewTrack(inTrack) {
  if (inTrack.artist === "Red Hot Chili Peppers") {
    return `The song ${inTrack.title} rules!`
  } else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

function addTrack(inCollection, inTrack) {
  inCollection.tracks.push(inTrack);
  return inCollection;
}

function getTotalDuration(inCollection) {
  var duration = 0;
  for(var i = 0; i < inCollection.tracks.length
    ; i++) {
      duration += inCollection.tracks[i].duration
    }
  return duration;
}

function findTracksByArtist(inCollection, inArtist) {
  var tracks = [];
  for(var i = 0; i < inCollection.tracks.length; i++) {
    if(inCollection.tracks[i].artist === inArtist) {
      tracks.push(inCollection.tracks[i])
    }
  }
  return tracks;
}

  module.exports = { 
    createCollection, 
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }