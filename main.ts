input.onButtonPressed(Button.A, function () {
    if (state == 1) {
        state = 3
    } else if (state == 3) {
        state = 4
    } else if (state == 4) {
        state = 2
    } else if (state == 2) {
        state = 1
    }
})
function change_lights () {
    if (red == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
    }
    if (yellow == 1) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
    }
    if (yellow == 1) {
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.pause(1000)
    }
}
let state = 0
let yellow = 0
let red = 0
red = 0
yellow = 0
let green = 0
state = 1
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
    change_lights()
})
