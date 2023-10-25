cuteBot.motors(20, 20)
let LeftWheel = 20
LeftWheel = 20
music.play(music.stringPlayable("F F G G D G G A ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A C5 B A F G D D ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("D D E G G - G G ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A A D A B C5 B A ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A G D F G - G G ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("G - G - G G G - ", 400), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("D E F - F G F E ", 200), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
loops.everyInterval(10, function () {
	
})
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        cuteBot.stopcar()
    } else {
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(70, 70)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(-5, 50)
        } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(50, -5)
        } else {
        	
        }
    }
})
