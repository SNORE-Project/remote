radio.setGroup(0);

snore.initialise();
radio.onReceivedValue(snore.receiveData);
loops.everyInterval(200, snore.storeData);
