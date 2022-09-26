radio.setGroup(0);
let active = false

input.onButtonPressed(Button.A, function () {
    active = !active;
    if (active) {
        snore.initialise();
    }
})

radio.onReceivedValue(snore.receiveData);
loops.everyInterval(200, () => {if (active){snore.storeData}});
