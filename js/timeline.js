import {validateEvent, validatePeriod} from './model/timeLine.js';

class TimeLine {
    constructor () {
        this.size = null
        this.events = []
    }

	addEvent (event) {
        this.events.push(validateEvent(event, this.size))
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
        validatePeriod(lengthOfPeriodInSeconds) 
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