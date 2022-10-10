radio.setGroup(0);
let active = false;
let statusLed = true;
let debug = false;

const setLed = () => {
    if (active && statusLed) {
        led.plot(0, 0);
    } else {
        led.unplot(0, 0);
    }
}

input.onButtonPressed(Button.A, () => {
    active = !active;
    if (active) {
        basic.showString("On");
        snore.initialise();
    } else {
        basic.showString("Off");
    }
    setLed();
});

input.onButtonPressed(Button.B, () => {
    statusLed = !statusLed;
    led.plot(0, 0);
    basic.pause(1000);
    setLed();
});

input.onButtonPressed(Button.AB, () => {
    debug = !debug;
})

radio.onReceivedValue((name, value) => {
    /*
    if (debug) {
        basic.showString(`recieved ${name}:${value}`);
    }
    */
    snore.receiveData(name, value);
});
loops.everyInterval(snore.intervalSize, () => {if(active){snore.storeData()}});
