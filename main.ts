radio.setGroup(0);

snore.initialise();
radio.onReceivedValue(snore.receiveData);
loops.everyInterval(100, snore.sendData);
