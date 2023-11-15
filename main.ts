input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let punkte = 0
let catchme: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
let leben = 3
basic.showIcon(IconNames.Heart)
basic.showNumber(leben)
basic.forever(function () {
    catchme = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        catchme.change(LedSpriteProperty.Y, 1)
    }
    if (sprite.get(LedSpriteProperty.X) == catchme.get(LedSpriteProperty.X)) {
        punkte += 1
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    } else {
        leben += -1
        music.playTone(247, music.beat(BeatFraction.Whole))
        if (leben > 0) {
            basic.clearScreen()
            basic.showIcon(IconNames.Heart)
            basic.showNumber(leben)
            basic.pause(500)
        } else {
            while (true) {
                basic.showIcon(IconNames.Skull, 800)
                basic.showString("SCORE:", 100)
                basic.showNumber(punkte)
            }
        }
    }
    catchme.delete()
})
