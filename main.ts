input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Half))
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
    music.playTone(392, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    basic.pause(100)
})
music.setVolume(255)
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ) > 10) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
