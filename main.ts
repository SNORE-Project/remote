radio.setGroup(0);

radio.onReceivedValue((name, value) => {
    snore.receiveData(name, value);
});

loops.everyInterval(snore.intervalSize, snore.storeData);
