radio.setGroup(0);
snore.initialise();

radio.onReceivedValue(snore.receiveData);

loops.everyInterval(snore.intervalSize, snore.storeData);
