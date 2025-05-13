input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Die = randint(1, 6)
    if (Die == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        Dice_Rolled += 1
    } else if (Die == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        Dice_Rolled += 1
    } else if (Die == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        Dice_Rolled += 1
    } else if (Die == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        Dice_Rolled += 1
    } else if (Die == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        Dice_Rolled += 1
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        Dice_Rolled += 1
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
    basic.showString("Number of Dice Rolls")
    basic.showNumber(Dice_Rolled)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    Superpowers = randint(1, 3)
    if (Superpowers == 1) {
        basic.showNumber(Die * 2)
        basic.pause(1000)
        basic.showString("Superpower ACTIVE!!!")
    } else if (Superpowers == 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        Random_Players = randint(1, 4)
        if (Random_Players == 1) {
            basic.showString("PlayerA Turn Skipped")
        } else if (Random_Players == 2) {
            basic.showString("PlayerB Turn Skipped")
        } else if (Random_Players == 3) {
            basic.showString("PlayerC Turn Skipped")
        } else {
            basic.showString("PlayerD Turn Skipped")
        }
    } else {
        basic.showString("Time Rewind")
        basic.pause(200)
        basic.showString("Every Player Move back 3 Steps")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    T_or_D = randint(1, 2)
    if (T_or_D == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.clearScreen()
    basic.showString("Welcome to our board game!")
    basic.pause(100)
    basic.showString("Press A to roll the Dice")
    basic.pause(100)
    basic.showString("Press B to get your truth or dare")
    basic.pause(100)
    basic.showString("Press A+B to get your superpower")
    basic.pause(100)
    basic.showString("Press Micro Bit logo for Boost Pad")
    basic.pause(100)
    basic.showString("If you want to see how much your rolled your dice")
    basic.pause(100)
    basic.showString("Turn your microbit upsidedown")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    Boost_Pad = randint(1, 22)
    if (Boost_Pad == 1) {
        basic.showString("Move 1 Step Forward")
    } else if (Boost_Pad == 2) {
        basic.showString("Move 2 Steps Forward")
    } else if (Boost_Pad == 3) {
        basic.showString("Move 3 Steps Forward")
    } else if (Boost_Pad == 4) {
        basic.showString("Move 4 Steps Forward")
    } else if (Boost_Pad == 5) {
        basic.showString("Move 5 Steps Forward")
    } else if (Boost_Pad == 6) {
        basic.showString("Move 6 Steps Forward")
    } else if (Boost_Pad == 7) {
        basic.showString("Move 7 Steps Forward")
    } else if (Boost_Pad == 8) {
        basic.showString("Move 8 Steps Forward")
    } else if (Boost_Pad == 9) {
        basic.showString("Move 9 Steps Forward")
    } else if (Boost_Pad == 10) {
        basic.showString("Move 10 Steps Forward")
    } else if (Boost_Pad == 11) {
        basic.showString("Move 11 Steps Forward")
    } else if (Boost_Pad == 12) {
        basic.showString("Move 12 Steps Forward")
    } else if (Boost_Pad == 13) {
        basic.showString("Move 13 Steps Forward")
    } else if (Boost_Pad == 14) {
        basic.showString("Move 14 Steps Forward")
    } else if (Boost_Pad == 15) {
        basic.showString("Move 15 Steps Forward")
    } else if (Boost_Pad == 16) {
        basic.showString("Move 16 Steps Forward")
    } else if (Boost_Pad == 17) {
        basic.showString("Move 17 Steps Forward")
    } else if (Boost_Pad == 18) {
        basic.showString("Move 18 Steps Forward")
    } else if (Boost_Pad == 19) {
        basic.showString("Move 19 Steps Forward")
    } else if (Boost_Pad == 20) {
        basic.showString("Move 20 Steps Forward")
    } else if (Boost_Pad == 21) {
        basic.showString("Move 21 Steps Forward")
    } else {
        basic.showString("Move 22 Steps Forward")
    }
})
let Dice_Rolled = 0
let Boost_Pad = 0
let Random_Players = 0
let Superpowers = 0
let Die = 0
let T_or_D = 0
T_or_D = 0
Die = 0
Superpowers = 0
Random_Players = 0
Boost_Pad = 0
