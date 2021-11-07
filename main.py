"""

Using IR obstacle sensors.
high  or 1= no obstacle
low or 0 = obsticle

"""

def on_button_pressed_a():
    global Time1, Time2, Time_difference, trial
    Time1 = 0
    Time2 = 0
    Time_difference = 0
    trial = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

trial = 0
Time_difference = 0
Time2 = 0
Time1 = 0
Time1 = 0
Time2 = 0
Time_difference = 0
trial = 1

def on_forever():
    global Time1, Time2, Time_difference, trial
    if pins.digital_read_pin(DigitalPin.P1) == 0 and Time1 == 0:
        Time1 = input.running_time()
        Time2 = 0
    if pins.digital_read_pin(DigitalPin.P2) == 0 and (Time2 == 0 and Time1 > 0):
        Time2 = input.running_time()
        Time_difference = Time2 - Time1
        Time1 = 0
        serial.write_line("" + str(trial) + "\". Time  \"" + str(Time_difference) + "\"  milliseconds\"")
        trial += 1
basic.forever(on_forever)
