basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("CALOR")
        music.play(music.stringPlayable("B A G A G F A C5 ", 400), music.PlaybackMode.UntilDone)
    } else {
        basic.showString("FRED")
        music.play(music.stringPlayable("C5 B A B C5 B A B ", 90), music.PlaybackMode.UntilDone)
    }
})
