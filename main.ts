// Using IR obstacle sensors.
// high  or 1= no obstacle
// low or 0 = obsticle
input.onButtonPressed(Button.A, function () {
    Time1 = 0
    Time2 = 0
    Time_difference = 0
    trial = 1
})
let trial = 0
let Time_difference = 0
let Time2 = 0
let Time1 = 0
Time1 = 0
Time2 = 0
Time_difference = 0
trial = 1
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && Time1 == 0) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        Time1 = input.runningTime()
        Time2 = 0
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0 && (Time2 == 0 && Time1 > 0)) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . # . . .
            . # # # .
            `)
        Time2 = input.runningTime()
        Time_difference = Time2 - Time1
        Time1 = 0
        serial.writeLine("" + trial + "\". Time  \"" + ("" + Time_difference) + "\"  milliseconds\"")
        trial += 1
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
