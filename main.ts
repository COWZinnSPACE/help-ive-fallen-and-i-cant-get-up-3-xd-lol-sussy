let x = 0
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    x = 2 + 3
    if (x == 5) {
        radio.sendString("HELP, I've FALLEN and I CAN'T GET UP UwU")
    }
})
basic.forever(function () {
    radio.setGroup(500)
})
