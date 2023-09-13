
You are asked to create an Event Emitter Class

const emitter = new Emitter()
It should support event subscribing

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// same callback could subscribe 
// on same event multiple times
const sub3 = emitter.subscribe('event1', callback1)
emit(eventName, ...args) is used to trigger the callbacks, with args relayed

emitter.emit('event1', 1, 2);
// callback1 will be called twice
Subscription returned by subscribe() has a release() method that could be used to unsubscribe

sub1.release()
sub3.release()
// now even if we emit 'event1' again, 
// callback1 is not called anymore



------ Output -----


A1. 
  
// please complete the implementation
class EventEmitter {
  events = {};
  constructor() {
    this.events = {};
  }
  id = 0;
  subscribe(eventName, callback) { 
    let index // 1, 2, 3
    if(!this.events[eventName]) {
      this.events[eventName] =  [callback];
      index = 0; 
    } else {
      this.events[eventName].push(callback); // 1
      index = this.events[eventName].length - 1;
    }
    return {
      release: () => {
        delete this.events[eventName][index];
      }
    }
  }
  
  emit(eventName, ...args) {
    if(!this.events[eventName]) return;
    for(let key in this.events[eventName]) {
  	  this.events[eventName]?.[key]?.(...args);
    }
  }
}

A2. 

  
