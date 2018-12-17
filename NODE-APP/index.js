const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

//event listeners
eventEmitter.on('greet', _ => {
    console.log('I am hadling greet signal');
});

eventEmitter.once('goodbye', _ => {
    console.log('I am hadling goodbye signal');
});

//emission

eventEmitter.emit('greet');
eventEmitter.emit('greet');
eventEmitter.emit('goodbye');
eventEmitter.emit('goodbye');
