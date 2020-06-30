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

  async function switchEngine(engineStatus, colorStatus) {
    try {
      var engineData = JSON.stringify({
        status: engineStatus,
        color: colorStatus,
      });
      await AsyncStorage.setItem('engine', engineData);
    } catch (e) {
      ToastAndroid.show('something went wrong, try again', ToastAndroid.SHORT);
    }
  }

  async function switchAlarm(alarmStatus, colorStatus) {
    try {
      var alarmData = JSON.stringify({
        status: alarmStatus,
        color: colorStatus,
      });
      await AsyncStorage.setItem('alarm', alarmData);
    } catch (e) {
      ToastAndroid.show('something went wrong, try again', ToastAndroid.SHORT);
    }
  }

  // Function to send message
  async function sendCommand(switchName) {
    var engineStatus = await AsyncStorage.getItem('engine');
    var alarmStatus = await AsyncStorage.getItem('alarm');
    var keyCommand = '';

    if (engineStatus === null && alarmStatus === null) {
      debugger;
      switchEngine('start', 'green');
      switchAlarm('alarmOff', 'green');
    }

    switchName === 'engine'
      ? engineStatus.status === 'stop'
        ? (switchEngine('start', 'green'), (keyCommand = 'start'))
        : (switchEngine('stop', 'gray'), (keyCommand = 'stop'))
      : engineStatus.status === 'alarmOff'
      ? (switchAlarm('alarmOn', 'red'), (keyCommand = 'alarmOn'))
      : (switchAlarm('alarmOff', 'green'), (keyCommand = 'alarmOff'));

    SendSMS.send(1, gpsNumber, commands[keyCommand], () => {
      ToastAndroid.show(commandDescription[keyCommand], ToastAndroid.SHORT);
    });
    console.log(engineStatus);
    console.log(alarmStatus);
  }

  async function getPowerColor() {
    return await AsyncStorage.getItem('engine').color;
  }

  return (
    <Scan
      sendCommand={sendCommand}
      powerIconColor="green"
      lockIconColor="green"
    />
  );
}

export default SendSMSContainer;
