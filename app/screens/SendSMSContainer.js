import React from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';

function SendSMSContainer() {
  request(PERMISSIONS.ANDROID.SEND_SMS);

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

  async function switchEngine(engineStatus) {
    try {
      await AsyncStorage.setItem('engine', engineStatus);
    } catch (e) {
      // saving error
    }
  }
  async function switchAlarm(alarmStatus) {
    try {
      await AsyncStorage.setItem('alarm', alarmStatus);
    } catch (e) {
      // saving error
    }
  }

  // Function to send message
  async function sendCommand(keyCommand, switchName) {
    const engineStatus = await AsyncStorage.getItem('engine');
    const alarmStatus = await AsyncStorage.getItem('alarm');

    SendSMS.send(1, gpsNumber, commands[keyCommand], () => {
      ToastAndroid.show(commandDescription[keyCommand], ToastAndroid.SHORT);
    });
  }
  return <Scan sendCommand={sendCommand} />;
}

export default SendSMSContainer;
