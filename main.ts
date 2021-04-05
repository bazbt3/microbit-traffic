function change_states () {
    if (state == 1) {
        state = 3
    } else if (state == 3) {
        state = 4
    } else if (state == 4) {
        state = 2
    } else if (state == 2) {
        state = 1
    }
}
function set_colours () {
    if (state == 1) {
        red = 1
        yellow = 0
        green = 0
    } else if (state == 3) {
        red = 1
        yellow = 1
        green = 0
    } else if (state == 4) {
        red = 0
        yellow = 0
        green = 1
    } else if (state == 2) {
        red = 0
        yellow = 1
        green = 0
    }
}
function write_lights () {
    if (red == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (red == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (yellow == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (yellow == 0) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (green == 1) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (green == 0) {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
}
let green = 0
let yellow = 0
let red = 0
let state = 0
let button = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P8, 0)
state = 1
basic.forever(function () {
    set_colours()
    write_lights()
    if (input.pinIsPressed(TouchPin.P0)) {
        change_states()
        basic.pause(1000)
    }
})
