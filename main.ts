let x = 0
input.onButtonPressed(Button.B, function () {
    x = 2 + 3
    if (x == 5) {
        radio.sendString("HELP >:(")
    }
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
basic.forever(function () {
    radio.setGroup(50)
})
