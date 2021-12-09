radio.onReceivedString(function (receivedString) {
    if (receivedString == "stop") {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
radio.setGroup(50)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        radio.sendString("HELP >:(")
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        radio.sendString("safe")
        music.stopAllSounds()
    }
})
