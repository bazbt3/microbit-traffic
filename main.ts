function change_lights () {
    if (state == 1) {
        state = 3
        basic.showNumber(state)
    } else if (state == 3) {
        state = 4
        basic.showNumber(state)
    } else if (state == 4) {
        state = 2
        basic.showNumber(state)
    } else if (state == 2) {
        state = 1
        basic.showNumber(state)
    }
}
let state = 0
let red = 0
pins.digitalWritePin(DigitalPin.P1, 0)
let yellow = 0
pins.digitalWritePin(DigitalPin.P2, 0)
let green = 0
pins.digitalWritePin(DigitalPin.P8, 0)
state = 1
let button = 0
basic.showString("i")
basic.pause(1000)
basic.forever(function () {
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
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("B")
        change_lights()
        basic.pause(1000)
    }
})
