let F = 0
let Fahrenheit = 0
let reamor = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("CELCIUS")
})
input.onButtonPressed(Button.AB, function () {
    F = input.temperature() * 1.8
    Fahrenheit = F + 32
    basic.showNumber(Fahrenheit)
    basic.showString("Fahrenheit")
})
input.onButtonPressed(Button.B, function () {
    reamor = input.temperature() * 0.8
    basic.showNumber(reamor)
    basic.showString("REAMOR")
})
