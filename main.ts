let distance = 0
bitbot.select_model(BBModel.XL)
basic.clearScreen()
music.setBuiltInSpeakerEnabled(true)
bitbot.setTalon(0)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    bitbot.go(BBDirection.Forward, 60)
    distance = bitbot.sonar(BBPingUnit.Centimeters)
    if (distance < 20) {
        bitbot.setTalon(30)
        basic.showIcon(IconNames.Surprised)
        soundExpression.hello.play()
        bitbot.goms(BBDirection.Reverse, 60, 400)
        bitbot.rotatems(BBRobotDirection.Left, 60, 400)
        bitbot.setTalon(0)
    }
})
