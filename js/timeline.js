module.exports = function Timeline() {
    let size;
    let events = [];
  
    this.init = function init (lengthOfPeriodInSeconds) {
        size = lengthOfPeriodInSeconds;
        console.log('tamaño' + size);
    };
    this.addAction = function addAction (timeInSeconds, team) {};
  };