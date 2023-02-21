radio.setGroup(0);
snore.initialise();

let pulse: number = null;
let time: number = null;
let movement: number = null;

radio.onReceivedValue((name, value) => {
    if (name == "pulse") {
        pulse = value;
    } else if (name == "time") {
        time = value;
    } else if (name == "movement") {
        movement = value;
    }
});

//loops.everyInterval(snore.intervalSize, snore.storeData);
