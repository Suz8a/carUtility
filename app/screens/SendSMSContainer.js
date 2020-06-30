import React from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';

function SendSMSContainer() {
  request(PERMISSIONS.ANDROID.SEND_SMS);

  const gpsNumber = '-';

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

  async function switchEngine(engineStatus) {
    try {
      await AsyncStorage.setItem('engine', engineStatus);
    } catch (e) {}
  }
  async function switchAlarm(alarmStatus) {
    try {
      await AsyncStorage.setItem('alarm', alarmStatus);
    } catch (e) {}
  }

  // Function to send message
  async function sendCommand(switchName) {
    const engineStatus = await AsyncStorage.getItem('engine');
    const alarmStatus = await AsyncStorage.getItem('alarm');
    var keyCommand = '';

    if (engineStatus === null && alarmStatus == null) {
      await AsyncStorage.setItem('engine', 'stop');
      await AsyncStorage.setItem('alarm', 'alarmOff');
    }

    switchName === 'engine'
      ? engineStatus === 'stop'
        ? (switchEngine('start'), (keyCommand = 'start'))
        : (switchEngine('stop'), (keyCommand = 'stop'))
      : alarmStatus === 'alarmOff'
      ? (switchAlarm('alarmOn'), (keyCommand = 'alarmOn'))
      : (switchAlarm('alarmOff'), (keyCommand = 'alarmOff'));

    SendSMS.send(1, gpsNumber, commands[keyCommand], () => {
      ToastAndroid.show(commandDescription[keyCommand], ToastAndroid.SHORT);
    });
  }
  return <Scan sendCommand={sendCommand} />;
}

export default SendSMSContainer;
