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
        Time1 = input.runningTime()
        Time2 = 0
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0 && (Time2 == 0 && Time1 > 0)) {
        Time2 = input.runningTime()
        Time_difference = Time2 - Time1
        Time1 = 0
        serial.writeLine("" + trial + "\". Time  \"" + Time_difference + "\"  milliseconds\"")
        trial += 1
    }
})
