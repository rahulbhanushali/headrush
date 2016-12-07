'use strict'

var events = []
var eventsFired = {}
const EventEmitter = require('events')

class HeadRush extends EventEmitter {
    constructor(eventsProvided) {
        super()
        if (!events.length) events = eventsProvided
        if (!events && !eventsProvided) {
            throw new Error('Initial events need to be present to stun')
        }
    }

    stun(event) {
        eventsFired[event] = true
        if (Object.keys(eventsFired).length >= events.length) {
            eventsFired = events = null
            this.emit('ready')
        }
    }
}

module.exports = HeadRush
