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
        [].forEach.call(document.querySelectorAll('.action'),function(e){
            e.parentNode.removeChild(e);
          });
    };
    
    const drawEvent = function (event) {
        const percent = (event.time/size)*100;
        let element;
        let subsectionPos;
        if (percent < 10 ) {
            element = document.getElementById('tl0');
        } else if (percent < 20) {
            element = document.getElementById('tl1');
            subsectionPos = percent - 10;
        } else if (percent < 30) {
            element = document.getElementById('tl2');
            subsectionPos = percent - 20;
        } else if (percent < 40) {
            element = document.getElementById('tl3');
            subsectionPos = percent - 30;
        } else if (percent < 50) {
            element = document.getElementById('tl4');
            subsectionPos = percent - 40;
        } else if (percent < 60) {
            element = document.getElementById('tl5');
            subsectionPos = percent - 50;
        } else if (percent < 70) {
            element = document.getElementById('tl6');
            subsectionPos = percent - 60;
        } else if (percent < 80) {
            element = document.getElementById('tl7');
            subsectionPos = percent - 70;
        } else if (percent < 90) {
            element = document.getElementById('tl8');
            subsectionPos = percent - 80;
        } else {
            element = document.getElementById('tl9');
            subsectionPos = percent - 90;
        }
        
        const newNode = document.createElement('div');
        newNode.className = 'action ' + event.team.toLowerCase();
        newNode.style.position = 'relative';
        newNode.style.left = subsectionPos + '%';
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