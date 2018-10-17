export const validateEvent = (event, periodSize) => {
    if (!Number.isInteger(event.time)) {
        throw 'The event time must be an integer';
    }
    if (event.time < 0 || event.time > periodSize) {
        throw 'The event time must be a value between 0 and ' + periodSize;
    }
    if (periodSize == null) {
        throw 'You must init the timeline before add events';
    }
    if (event.time == null || periodSize == null) {
        throw 'Time and Team are required to add an event into timeline';
    }
    const teamLower = event.team.toLowerCase();
    if (!['home', 'away'].includes(teamLower)) {
        throw 'The event team must be "home" or "away"';
    }

    return event
}

export const validatePeriod = (timeInSeconds) => {
    if (!Number.isInteger(timeInSeconds)) {
        throw "The lenght of period must be an integer"
    }
}