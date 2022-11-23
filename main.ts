input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    Rope += -0.1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        `)
    Rope += 0.1
})
let Rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Rope, 2)
    if (Rope < 0) {
        basic.showString("A vinner")
    } else if (Rope > 4) {
        basic.showString("B vinner")
    }
})
