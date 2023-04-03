function createBirthday(inputName, inputMonth, inputDay) {
    var birthday = {
        name: inputName,
        month: inputMonth,
        day: inputDay
    };
    return birthday;
}

function celebrateBirthday(birthday) {
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month) {
    var counter = 0;
    for( var i = 0; i < birthdays.length; i++) {
        if (birthdays[i].month === month) {
            counter += 1;
        }
    }
    return counter;
}

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };