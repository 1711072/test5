music.setVolume(255)
basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(100)
})
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
