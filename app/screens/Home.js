import React, {useState, useEffect} from 'react';
import Scan from './scan';
import SendSMS from 'react-native-sms-x';
import {ToastAndroid} from 'react-native';

import {request, PERMISSIONS} from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';

function Home() {
  request(PERMISSIONS.ANDROID.SEND_SMS);
  const [powerColor, setPowerColor] = useState('green');
  const [lockColor, setLockColor] = useState('green');
  const [lockIcon, setLockIcon] = useState('unlocked');

  useEffect(() => {
    (async () => {
      var engineStatus = await AsyncStorage.getItem('engine');
      var alarmStatus = await AsyncStorage.getItem('alarm');

      if (engineStatus === null && alarmStatus === null) {
        switchEngine('start', 'green');
        switchAlarm('alarmOff', 'green');
      }

      setPowerColor(JSON.parse(engineStatus).color.toString());
      setLockColor(JSON.parse(alarmStatus).color.toString());
      JSON.parse(alarmStatus).color.toString() === 'green'
        ? setLockIcon('unlocked')
        : setLockIcon('locked');
    })();
  }, []);

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
    const engineStatus = await AsyncStorage.getItem('engine');
    const alarmStatus = await AsyncStorage.getItem('alarm');
    var keyCommand = '';

    const engineData = JSON.parse(engineStatus);
    const alarmData = JSON.parse(alarmStatus);

    switchName === 'engine'
      ? engineData.status === 'stop'
        ? (switchEngine('start', 'green'),
          setPowerColor('green'),
          (keyCommand = 'start'))
        : (switchEngine('stop', 'red'),
          setPowerColor('red'),
          (keyCommand = 'stop'))
      : alarmData.status === 'alarmOff'
      ? (switchAlarm('alarmOn', 'red'),
        setLockIcon('locked'),
        setLockColor('red'),
        (keyCommand = 'alarmOn'))
      : (switchAlarm('alarmOff', 'green'),
        setLockColor('green'),
        setLockIcon('unlocked'),
        (keyCommand = 'alarmOff'));

    SendSMS.send(1, gpsNumber, commands[keyCommand], () => {
      ToastAndroid.show(commandDescription[keyCommand], ToastAndroid.SHORT);
    });
    console.log(engineStatus);
    console.log(alarmStatus);
  }

  return (
    <Scan
      sendCommand={sendCommand}
      lockIcon={lockIcon}
      powerColor={powerColor}
      lockIconColor={lockColor}
    />
  );
}

export default Home;
