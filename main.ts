snore.initialise()
radio.onReceivedValue(snore.receiveData);
loops.everyInterval(100, snore.storeData);
