input.onGesture(Gesture.ScreenUp, function () {
    Background_playing = 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
    Background_playing = 0
})
let Background_playing = 0
cuteBot.motors(70, 70)
let LeftWheel = 20
LeftWheel = 20
Background_playing = 0
loops.everyInterval(4000, function () {
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            # . # . .
            . # # . .
            . . # # .
            . . # . #
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # # .
            . . # . #
            . # . # .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . .
            . # # . .
            . . # # .
            . . # . #
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            # . # # .
            # # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . #
            . . # # .
            . # # . .
            # . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # . #
            . # # # #
            . . # . .
            . # . # .
            `)
        basic.pause(500)
    }
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . . . #
        . . . . #
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . . . #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . # # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . .
        . . # # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . .
        . . # # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . # . .
        . . # # #
        # . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # # #
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # # #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . # # #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        # . # # #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        # . . . .
        # . . # #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . # . #
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        # . . . .
        # . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # . . . .
        # . # . .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . . . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . .
        # . # . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . #
        # . # . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . #
        # . # # .
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . #
        # . # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . #
        . . # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . #
        . . # . #
        . . # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # . #
        . . # . #
        . . # . #
        . . # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . # . #
        . . # . #
        . . # # #
        # . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(1000)
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
basic.forever(function () {
    music.play(music.stringPlayable("F F G G D G G A ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A C5 B A F G D - ", 230), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D D - E F E F E ", 150), music.PlaybackMode.UntilDone)
})
loops.everyInterval(700, function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x007fff)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff00ff)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff00ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x00ff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff9da5)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0x65471f)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
    basic.pause(100)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0080)
    basic.pause(100)
})
