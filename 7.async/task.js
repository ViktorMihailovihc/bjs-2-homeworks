'use strict';

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
    }
    if (this.alarmCollection.some(item => item.id === id)) {
      console.error('Будильник с таким id уже существует.');
      return;
    }  
    this.alarmCollection.push({ id, time, callback });
  }

  removeClock(id) {
    const oldLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
    return this.alarmCollection.length !== oldLength;
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().substr(0,5);
  }

  addMinutesToCurrentTime(min) {
    return new Date(Date.now() + min * 60000).toLocaleTimeString().substr(0,5);
  }

  start() {  
    const checkClock = (alarm) => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.callback();
      }
    }
    
    if (this.timerId === null) {
      this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
    }
  }

  stop() {
    if (this.timerID !== null) {
      clearInterval(this.timerID);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(item => console.log(`Будильник №${item.id} заведён на ${item.time}`));
  }

  clearAlarms() {
    this.stop(); 
    this.alarmCollection = [];
  }
}

const testCase = (() => {
  const phoneAlarm = new AlarmClock;    
  
  phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log('Скоро спать'), 1);
  phoneAlarm.addClock(
    phoneAlarm.addMinutesToCurrentTime(1), 
    () => {
      console.log('Пора готовиться ко сну'); 
      phoneAlarm.removeClock(2);  
    }, 
    2,
  );
  
  phoneAlarm.addClock(
    phoneAlarm.addMinutesToCurrentTime(2), 
    () => { 
      console.log('Иди спать, завтра рано на работу!'); 
      phoneAlarm.clearAlarms(); 
      phoneAlarm.printAlarms(); 
    }, 
    3,
  );

  phoneAlarm.addClock(phoneAlarm.addMinutesToCurrentTime(2), () => console.log('Иди спать, завтра рано на работу!'), 1);  
  
  phoneAlarm.printAlarms();
  
  phoneAlarm.start();
})();