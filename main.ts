radio.setGroup(0);
snore.initialise();

radio.onReceivedValue(snore.receiveData);
radio.onReceivedString(snore.recievePulse);

loops.everyInterval(snore.intervalSize, snore.storeData);
