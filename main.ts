//% color=#FF6F00 icon="\uf085"
namespace SmoothServo {

    //% blockId=smooth_servo_move
    //% block="servo %pin|from %start to %end in %time ms (smooth)"
    //% weight=100
    export function moveSmooth(pin: AnalogPin, start: number, end: number, time: number): void {

        let steps = Math.abs(end - start)
        if (steps == 0) return

        for (let i = 0; i <= steps; i++) {

            let t = i / steps
            let ease = t * t * (3 - 2 * t) // smoothstep

            let angle = start + (end - start) * ease

            pins.servoWritePin(pin, angle)
            basic.pause(time / steps)
        }
    }
}