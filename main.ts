input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let catchme: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
let punkte = 0
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
        basic.pause(500)
    }
    catchme.delete()
})
