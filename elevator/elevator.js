function createElevator(inBuilding, inFloors, inCurrentFloor, inPassengers) {
    var elevator = {
        building: inBuilding,
        floors: inFloors,
        currentFloor: inCurrentFloor,
        passengers: inPassengers
    };
    return elevator;
}

function changeFloors(inElevator, inDestinationFloor) {
    if (inDestinationFloor > inElevator.floors) {
        return `Floor ${inDestinationFloor} does not exist!`;
    }
    if (inElevator.currentFloor === inDestinationFloor) {
        return `You're already on floor ${inDestinationFloor}!`;
    } else {
        return `Taking you to floor ${inDestinationFloor}!`;
    }
}

function dropOffPassenger(inElevator, inPassenger) {
    var index = inElevator.passengers.indexOf(inPassenger);
    inElevator.passengers.splice(index,1);
    return inElevator.passengers;
}


module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
 };
