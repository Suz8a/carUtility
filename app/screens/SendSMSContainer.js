import React from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

function SendSMSContainer() {
  const gpsNumber = '6672047175';
  //6674832418
  const commands = {
    start: 'resume123456',
    stop: 'stop123456',
    alarmOn: 'arm123456',
    alarmOff: 'disarm123456',
  };
  const commandDescription = {
    start: 'Engine Started',
    stop: 'Engine Stopped',
    alarmOn: 'Alarm On',
    alarmOff: 'Alarm Off',
  };
  // Function to send message
  function sendCommand(keyCommand) {
    SendSMS.send(1, gpsNumber, commands[keyCommand], () => {
      ToastAndroid.show(commandDescription[keyCommand], ToastAndroid.SHORT);
    });
  }
  return <Scan sendCommand={sendCommand} />;
}

export default SendSMSContainer;
