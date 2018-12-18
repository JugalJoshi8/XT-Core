const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

//event listeners
eventEmitter.on('greet', _ => {
    console.log('I am hadling greet signal');
});

eventEmitter.once('goodbye', _ => {
    console.log('I am hadling goodbye signal');
});

eventEmitter.on('add', function(a, b) {
    console.log('sum', a + b);
});

eventEmitter.on('myevent', function() {
    console.log(this);
});

eventEmitter.on('myevent', _ => {
    console.log(this);
});

eventEmitter.on('asyncevent', _ => {
    setImmediate(_ => {
        console.log('asyncevent listner');
    });
});

//emission

eventEmitter.emit('greet');
eventEmitter.emit('greet');
eventEmitter.emit('goodbye');
eventEmitter.emit('goodbye');
eventEmitter.emit('add', 20, 34);
eventEmitter.emit('asyncevent');
eventEmitter.emit('myevent');
eventEmitter.emit('myevent');

// extending event emitter
class Room extends EventEmitter {
    constructor() {
        super();
        this.on('initialize', _ => {
            console.log('light initialized;')
        });
        this.on('destroy', _ => {
            console.log('light closed;')
        });
    }

    open() {
        this.emit('initialize')
    }

    close() {
        this.emit('destroy');
    }
}

const room = new Room();
room.open();
room.close();



