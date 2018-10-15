const timeline = (function () {

	'use strict';

    let publicObj = {};
    let size;
    let events = [];
    
	const addEvent = function (timeInSeconds, team) {
        // Validations
        if (!Number.isInteger(timeInSeconds)) {
            throw 'The event time must be an integer';
        }
		if (timeInSeconds < 0 || timeInSeconds > size) {
            throw 'The event time must be a value between 0 and ' + size;
        }
        if (size == null) {
            throw 'You must init the timeline before add events';
        }
        if (timeInSeconds == null || size == null) {
            throw 'Time and Team are required to add an event into timeline';
        }
        const teamLower = team.toLowerCase();
        if (!['home', 'away'].includes(teamLower)) {
            throw 'The event team must be "home" or "away"';
        }

        events.push({time: timeInSeconds,team: team});

    };

    const clearEvents = function ( ) {
        console.log(events);
    };
    
    const drawEvent = function (event) {
        const timelineSection = Number.parseInt(event.time/size);
        const element = document.getElementById("tl" + timelineSection );
        const newNode = document.createElement('div');
        newNode.className = 'action ' + event.team.toLowerCase();
        element.appendChild(newNode);
	};
    
    const drawEvents = function ( ) {
        clearEvents();
        const self = this;
        events.forEach(function(event) {
            drawEvent(event);
          });
          
	};

	publicObj.init = function (lengthOfPeriodInSeconds) {
        // Validations
        if (!Number.isInteger(lengthOfPeriodInSeconds)) {
            throw "The lenght of period must be an integer"
        }
        size = lengthOfPeriodInSeconds;
    };
    
    publicObj.addAction = function (timeInSeconds, team) {
        addEvent(timeInSeconds, team);
        drawEvents();
	};

	return publicObj;

})();