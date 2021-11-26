input.onButtonPressed(Button.A, function () {
    snowflake.start()
})
input.onButtonPressed(Button.B, function () {
    snowflake.reset()
    snowflake.pause()
})
snowflake.config(
DigitalPin.P2,
true,
8,
50,
8,
128
)
snowflake.load_default_backgroud()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
