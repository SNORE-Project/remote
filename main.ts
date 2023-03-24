radio.setGroup(0);

let pulse = -1;
let time = -1;
let movement = -1;

IM01.overwriteFile("info.txt", `${control.deviceSerialNumber().toString()}\n${control.deviceName()}\n`);
IM01.appendFile("data.csv", "time,pulse,movement\n");

IM01.turn_off_leds();

radio.onReceivedValue((name, value) => {
    if (name == "pulse") {
        pulse = value;
    } else if (name == "time") {
        time = value;
    } else if (name == "movement") {
        movement = value;
        IM01.appendFileLine("data.csv", `${time},${pulse},${movement}`);
        pulse = -1;
        time = -1;
        movement = -1;
    }
});
