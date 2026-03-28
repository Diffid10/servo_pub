//% weight=100 color=#0fbc11 icon="\uf1b9"
namespace SmoothServo {

    //% block="servo pin %pin|from %start to %end in %time ms (smooth)"
    export function moveSmooth(pin: AnalogPin, start: number, end: number, time: number): void {

        let steps = Math.abs(end - start)
        if (steps == 0) return

        let direction = start < end ? 1 : -1

        for (let i = 0; i <= steps; i++) {

            //  easing function (smooth motion)
            let t = i / steps
            let ease = t * t * (3 - 2 * t)   // smoothstep

            let angle = start + (end - start) * ease

            pins.servoWritePin(pin, angle)
            basic.pause(time / steps)
        }
    }
}