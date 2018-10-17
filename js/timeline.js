class TimeLine {
    constructor () {
        this.size = null
        this.events = []
    }

    validateEvent (event, periodSize) {
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
    }
    
    validatePeriod (timeInSeconds) {
        if (!Number.isInteger(timeInSeconds)) {
            throw "The lenght of period must be an integer"
        }
    }

	addEvent (event) {
        this.validateEvent(event, this.size)
        this.events.push(event)
    };

    clearEvents ( ) {
        document.querySelectorAll('.action').forEach(e => e.remove())
    };
    
    drawEvent (event) {
        const percent = (event.time/this.size) * 100
        
        const newNode = document.createElement('div')
        newNode.className = 'action ' + event.team.toLowerCase()
        newNode.style.left = percent + '%'
        document.getElementById('timeline').appendChild(newNode)
	};
    
     drawEvents ( ) {
        this.clearEvents()
        this.events.forEach(event => this.drawEvent(event))
	};

	init (lengthOfPeriodInSeconds) {
        this.events = [];
        this.validatePeriod(lengthOfPeriodInSeconds) 
        this.size = lengthOfPeriodInSeconds;
        this.clearEvents();
    }
    
    addAction (time, team) {
        this.addEvent({time, team});
        this.drawEvents();
	}
}

const timeLine = new TimeLine()

export const init = (time) => timeLine.init(time)
export const addAction = (time, team) => timeLine.addAction(time, team)

//for console use
window.init = (lengthOfPeriodInSeconds) => timeLine.init(lengthOfPeriodInSeconds)
window.addAction = (timeInSeconds, team) => timeLine.addAction(timeInSeconds, team)