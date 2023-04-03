function createBarber(inputName, inputEarnings, cutList) {
    var barber = {
        name: inputName,
        earnings: 0,
        haircuts: []
    };

    if(inputEarnings) {
        barber.earnings = inputEarnings;
    }

    if(cutList) {
        barber.haircuts = cutList
    }

    return barber; 
}

function giveCompliment(cut) {
    return `This ${cut.style} looks great!`;
}

function cutHair(barber, cut) {
    barber.haircuts.push(cut);
    barber.earnings += cut.price;
    return barber;
}

function listStyles(barber, length) {
    var styles = [];
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === length) {
            styles.push(barber.haircuts[i].style);
        }
    }
    return styles;
}

module.exports = { 
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
 };