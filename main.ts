radio.setGroup(0);

radio.onReceivedValue(snore.receiveData);

loops.everyInterval(snore.intervalSize, snore.storeData);
