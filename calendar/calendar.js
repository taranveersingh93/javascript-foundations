function createEvent(inputTask, inputMonth, inputDate) {
    if (!inputDate || inputDate === 0 || inputDate > 31) {
        return `Error: ${inputDate} is not a valid day`;
    }
    
    var event = {};
    event.title = inputTask;
    event.month = inputMonth;
    event.day = inputDate;
    return event;
}

function createCalendar(inputOwner, inputEvents) {
    var calendar = {
        owner: inputOwner,
        events: inputEvents
    };
    return calendar;
}

function reportMonthlyEvents(inputCalendar, inputMonth) {
    
    var monthlyEvents = [];
    for(var i = 0; i < inputCalendar.events.length; i++) {
        if(inputCalendar.events[i].month === inputMonth) {
            console.log("condition met");
            monthlyEvents.push(inputCalendar.events[i]);
        }
    }
    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};